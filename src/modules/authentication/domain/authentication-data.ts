import { Crypt, Hasher } from '../../../common/protocols/cryptography'

export interface AuthenticationDataDTO {
  name: string
  email: string
  phone: string
  document: string
}

export interface AuthenticationDataParams extends AuthenticationDataDTO {
  password: string
  access_token?: string
}

export abstract class AuthenticationData {
  constructor (protected params: AuthenticationDataParams) { }

  getName (): string {
    return this.params.name
  }

  getEmail (): string {
    return this.params.email
  }

  getDocument (): string {
    return this.params.document
  }

  getPhone (): string {
    return this.params.phone
  }

  getPassword (): string {
    return this.params.password
  }

  getAccessToken (): string {
    return this.params.access_token!
  }

  async encryptPassword (hasher: Hasher): Promise<this> {
    this.params.password = await hasher.hash(this.params.password)

    return this
  }

  async createAccessToken (jwtEncrypt: Crypt): Promise<this> {
    this.params.access_token = await jwtEncrypt.encrypt({
      name: this.getName(),
      document: this.getDocument(),
      email: this.getEmail(),
      phone: this.getPhone()
    })

    return this
  }
}
