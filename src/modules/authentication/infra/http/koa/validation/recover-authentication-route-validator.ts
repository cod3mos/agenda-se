import { AuthenticationRouteValidator } from './authentication-route-validator'

export class RecoverAuthenticationRouteValidator extends AuthenticationRouteValidator {
  getRules (): any {
    const rules = super.getRules()

    return {
      ...rules,
      email: { type: 'string' }
    }
  }
}
