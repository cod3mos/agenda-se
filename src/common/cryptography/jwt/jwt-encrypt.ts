import jwt from 'jsonwebtoken'

import { Crypt } from '../../protocols/cryptography'
import { getEnvironmentsService } from '../../environments/domain/helpers'
import { AuthenticationDataDTO } from '../../../modules/authentication/domain/authentication-data'

export class JwtEncrypt implements Crypt {
  constructor (private readonly secret: string) { }

  static async create (): Promise<JwtEncrypt> {
    const process = await getEnvironmentsService().execute()

    return new JwtEncrypt(process.getEnv().JWT_SECRET)
  }

  async encrypt (payload: AuthenticationDataDTO): Promise<string> {
    return jwt.sign({ payload }, this.secret, { expiresIn: '7d' })
  }

  async decrypt (token: string): Promise<string> {
    return jwt.verify(token, this.secret) as any
  }
}
