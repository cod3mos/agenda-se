import { RouterContext } from 'koa-router'

export interface KoaParameterContext extends RouterContext {
  verifyParams: (rules: any) => void
}
