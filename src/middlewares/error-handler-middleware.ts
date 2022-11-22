import { ParameterizedContext } from 'koa'
import { Middleware } from '../common/protocols'
import { ResponseErrorFactory } from '../errors/response-error-factory'

export class ErrorHandlerMiddleware implements Middleware<ParameterizedContext> {
  async handle (context: ParameterizedContext, next: Function): Promise<void> {
    try {
      await next()
    } catch (error: unknown) {
      const responseError = ResponseErrorFactory.from(error)

      context.status = responseError.getStatusCode()
      context.body = responseError.getBody()
    }
  }
}
