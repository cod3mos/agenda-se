import { AuthenticationRouteValidator } from './authentication-route-validator'

export class ValidateAuthenticationRouteValidator extends AuthenticationRouteValidator {
  getRules (): any {
    const rules = super.getRules()

    return {
      ...rules,
      email: { type: 'string' },
      password: { type: 'string', required: true }
    }
  }
}
