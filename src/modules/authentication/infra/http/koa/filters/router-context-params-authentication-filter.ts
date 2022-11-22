import { RouterContext } from 'koa-router'
import { AuthenticationFilter } from '../../../../domain/filters/authentication-filter'

export class RouterContextParamsAuthenticationFilter extends AuthenticationFilter {
  constructor (context: RouterContext) {
    super({ email: context.params.email })
  }

  static from (context: RouterContext): RouterContextParamsAuthenticationFilter {
    return new RouterContextParamsAuthenticationFilter(context)
  }
}
