export interface Notification<T = any> {
  send: (data: T) => Promise<void>
}
