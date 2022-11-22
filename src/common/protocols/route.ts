import { HttpMethodEnum } from 'ts-node-backend'
import { RouteValidator } from './route-validator'

export interface Route<CONTEXT, NEXT = Function> {
  getUrl: () => string
  getMethod: () => HttpMethodEnum
  getValidator: () => RouteValidator<CONTEXT> | null
  handle: (context: CONTEXT, next: NEXT) => Promise<void>
}
