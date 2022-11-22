import { AuthenticationRouteValidator } from './authentication-route-validator'

export class AuthenticationCreateRouteValidator extends AuthenticationRouteValidator {
  getRules (): any {
    const rules = super.getRules()

    return {
      ...rules,
      email: { ...rules.email },
      name: { ...rules.name, required: true },
      phone: { ...rules.phone, required: true },
      document: { ...rules.document, required: true },
      password: { ...rules.password, required: true }
    }
  }
}
