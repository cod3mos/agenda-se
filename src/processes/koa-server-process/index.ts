import { InfoRoute } from './routes/info-route'
import { KoaServerProcess } from './koa-server-process'
import { ErrorHandlerMiddleware } from '../../middlewares/error-handler-middleware'
import { AuthenticationRouteGroup } from '../../modules/authentication/infra/http/koa/routes/authentication-route-group'

export default KoaServerProcess.create()
  .addRoute(new InfoRoute())
  .addMiddleware(new ErrorHandlerMiddleware())
  .addRouteGroup(new AuthenticationRouteGroup())
