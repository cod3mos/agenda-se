import { container } from 'tsyringe'
import { Bcrypt } from '../bcrypt/bcrypt'
import { Bootstrap } from 'ts-node-backend'
import { JwtEncrypt } from '../jwt/jwt-encrypt'
import { BcryptTypeEnum } from '../bcrypt/bcrypt-type-enum'
import { JwtEncryptTypeEnum } from '../jwt/jwt-encrypt-type-enum'

export class CryptographyBootstrap implements Bootstrap {
  async handler (): Promise<void> {
    container.register(BcryptTypeEnum.BCRYPT, Bcrypt)
    container.register(JwtEncryptTypeEnum.JWT_ENCRYPT, { useValue: await JwtEncrypt.create() })
  }
}
