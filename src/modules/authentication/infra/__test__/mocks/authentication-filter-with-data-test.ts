import { AuthenticationFilter } from '../../../domain/filters/authentication-filter'

export class AuthenticationFilterWithDataTest extends AuthenticationFilter {
  constructor () {
    super({
      email: 'any_email@mail.com',
      password: 'any_password'
    })
  }
}
