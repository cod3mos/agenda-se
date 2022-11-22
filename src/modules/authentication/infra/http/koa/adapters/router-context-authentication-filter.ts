import { RouterContext } from 'koa-router'
import { AuthenticationFilter } from '../../../../domain/filters/authentication-filter'

export class RouterContextAuthenticationFilter extends AuthenticationFilter {
  constructor (context: RouterContext<any>) {
    super({
      email: context.request.body.email,
      password: context.request.body.password
    })
  }

  static from (context: RouterContext): RouterContextAuthenticationFilter {
    return new RouterContextAuthenticationFilter(context)
  }
}
