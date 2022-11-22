import { RouterContext } from 'koa-router'
import { HttpMethodEnum } from 'ts-node-backend'
import { Route, RouteValidator } from '../../../../../../common/protocols'
import { getCreateAuthenticationService } from '../../../../domain/helpers'
import { HttpStatusEnum } from '../../../../../../common/http/http-status-enum'
import { AuthenticationCreateRouteValidator } from '../validation/authentication-create-route-validator'
import { RouterContextToAuthenticationAdapter } from '../adapters/router-context-to-authentication-adapter'

export class CreateAuthenticationRoute implements Route<RouterContext> {
  getMethod (): HttpMethodEnum {
    return HttpMethodEnum.PUT
  }

  getUrl (): string {
    return '/authentication'
  }

  getValidator (): RouteValidator<RouterContext> | null {
    return new AuthenticationCreateRouteValidator()
  }

  async handle (context: RouterContext, next: Function): Promise<void> {
    const authentication = await getCreateAuthenticationService().execute(
      RouterContextToAuthenticationAdapter.from(context)
    )

    context.body = authentication.toJson()
    context.status = HttpStatusEnum.CREATED
  }
}
