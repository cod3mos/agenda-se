import { RouterContext } from 'koa-router'
import { HttpMethodEnum } from 'ts-node-backend'
import { Route, RouteValidator } from '../../../../../../common/protocols'
import { getRecoverAuthenticationService } from '../../../../domain/helpers'
import { HttpStatusEnum } from '../../../../../../common/http/http-status-enum'
import { RecoverAuthenticationRouteValidator } from '../validation/recover-authentication-route-validator'
import { RouterContextParamsAuthenticationFilter } from '../filters/router-context-params-authentication-filter'

export class RecoverAuthenticationRoute implements Route<RouterContext> {
  getMethod (): HttpMethodEnum {
    return HttpMethodEnum.GET
  }

  getUrl (): string {
    return '/authentication/recovery/:email'
  }

  getValidator (): RouteValidator<RouterContext> | null {
    return new RecoverAuthenticationRouteValidator()
  }

  async handle (context: RouterContext, next: Function): Promise<void> {
    await getRecoverAuthenticationService().execute(
      RouterContextParamsAuthenticationFilter.from(context)
    )

    context.status = HttpStatusEnum.SUCCESS
  }
}
