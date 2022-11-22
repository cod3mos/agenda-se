import { RouterContext } from 'koa-router'
import { HttpMethodEnum } from 'ts-node-backend'
import { Route, RouteValidator } from '../../../../../../common/protocols'
import { getValidateAuthenticationService } from '../../../../domain/helpers'
import { HttpStatusEnum } from '../../../../../../common/http/http-status-enum'
import { RouterContextAuthenticationFilter } from '../adapters/router-context-authentication-filter'
import { ValidateAuthenticationRouteValidator } from '../validation/validate-authentication-route-validator'

export class ValidateAuthenticationRoute implements Route<RouterContext> {
  getMethod (): HttpMethodEnum {
    return HttpMethodEnum.POST
  }

  getUrl (): string {
    return '/authentication'
  }

  getValidator (): RouteValidator<RouterContext> | null {
    return new ValidateAuthenticationRouteValidator()
  }

  async handle (context: RouterContext, next: Function): Promise<void> {
    const authentication = await getValidateAuthenticationService().execute(
      RouterContextAuthenticationFilter.from(context)
    )

    context.body = authentication.toJson()
    context.status = HttpStatusEnum.SUCCESS
  }
}
