import { RouterContext } from 'koa-router'
import { HttpMethodEnum } from 'ts-node-backend'
import { Route, RouteValidator } from '../../../common/protocols'
import { HttpStatusEnum } from '../../../common/http/http-status-enum'

export class InfoRoute implements Route<RouterContext> {
  getMethod (): HttpMethodEnum {
    return HttpMethodEnum.GET
  }

  getUrl (): string {
    return '/'
  }

  getValidator (): RouteValidator<RouterContext> | null {
    return null
  }

  async handle (context: RouterContext, next: Function): Promise<void> {
    context.status = HttpStatusEnum.SUCCESS
    context.body = {
      status: 'online',
      version: '0.0.1',
      date: new Date()
    }
  }
}
