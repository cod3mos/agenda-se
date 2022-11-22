export interface Middleware<CONTEXT, NEXT = Function> {
  handle: (context: CONTEXT, next: NEXT) => Promise<void>
}
