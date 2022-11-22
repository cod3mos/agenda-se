export interface UseCase<T> {
  execute: (data?: any) => Promise<T>
}
