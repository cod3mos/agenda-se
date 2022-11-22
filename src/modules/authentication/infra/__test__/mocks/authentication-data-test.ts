import { AuthenticationData } from '../../../domain/authentication-data'

export class AuthenticationDataTest extends AuthenticationData {
  constructor () {
    super({
      name: 'any_name',
      phone: '1199999999',
      email: 'any@mail.com',
      document: '12345678910',
      password: 'any@password'
    })
  }
}
