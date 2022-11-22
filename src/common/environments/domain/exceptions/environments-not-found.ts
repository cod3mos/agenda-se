import { ErrorException } from 'ts-node-backend'

export class EnvironmentsNotFound extends ErrorException {
  constructor (errors: string[]) {
    super(`environment variables not found: ${errors.join(', ')}`)
  }
}
