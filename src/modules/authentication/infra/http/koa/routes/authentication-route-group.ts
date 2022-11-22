import { RouterContext } from 'koa-router'
import { Route, RouteGroup } from '../../../../../../common/protocols'
import { CreateAuthenticationRoute } from './create-authentication-route'
import { RecoverAuthenticationRoute } from './recover-authentication-route'
import { ValidateAuthenticationRoute } from './validate-authentication-route'

export class AuthenticationRouteGroup implements RouteGroup<RouterContext> {
  getRoutes (): Array<Route<RouterContext>> {
    return [
      new CreateAuthenticationRoute(),
      new RecoverAuthenticationRoute(),
      new ValidateAuthenticationRoute()
    ]
  }
}
