import { RouteValidator } from '../../../../../../common/protocols'
import { KoaParameterContext } from '../../../../../../common/helpers/koa/koa-parameter-context'
import { PhoneFormat, DocumentFormat } from '../../../../../../common/helpers/koa/validation/format'

export class AuthenticationRouteValidator implements RouteValidator<KoaParameterContext> {
  async validate (context: KoaParameterContext): Promise<void> {
    context.verifyParams(this.getRules())
  }

  getRules (): any {
    return {
      email: { type: 'string' },
      name: { type: 'string', required: false },
      password: { type: 'string', required: false },
      phone: { type: 'string', required: false, format: PhoneFormat.validate() },
      document: { type: 'string', required: false, format: DocumentFormat.validate() }
    }
  }
}
