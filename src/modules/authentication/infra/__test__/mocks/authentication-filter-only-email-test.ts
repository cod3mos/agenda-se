import { AuthenticationFilter } from '../../../domain/filters/authentication-filter'

export class AuthenticationFilterOnlyEmailTest extends AuthenticationFilter {
  constructor () {
    super({
      email: 'any@mail.com'
    })
  }
}
