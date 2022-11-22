export interface RouteValidator<CTX> {
  getRules: () => any
  validate: (context: CTX) => Promise<void>
}
