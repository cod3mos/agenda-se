import { ErrorException } from 'ts-node-backend'

export class UnauthorizedException extends ErrorException {
  constructor () {
    super('unauthorized')
  }
}
