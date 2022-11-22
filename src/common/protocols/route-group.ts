import { Route } from './route'

export interface RouteGroup<CONTEXT> {
  getRoutes: () => Array<Route<CONTEXT>>
}
