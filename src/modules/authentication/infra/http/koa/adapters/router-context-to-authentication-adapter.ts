import { RouterContext } from 'koa-router'
import { AuthenticationData } from '../../../../domain/authentication-data'

export class RouterContextToAuthenticationAdapter extends AuthenticationData {
  constructor (context: RouterContext) {
    super({
      name: context.request.body.name,
      document: context.request.body.document,
      email: context.request.body.email,
      password: context.request.body.password,
      phone: context.request.body.phone
    })
  }

  static from (context: RouterContext): RouterContextToAuthenticationAdapter {
    return new RouterContextToAuthenticationAdapter(context)
  }
}
