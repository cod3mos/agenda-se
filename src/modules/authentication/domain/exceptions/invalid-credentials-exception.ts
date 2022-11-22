import { ErrorException } from 'ts-node-backend'

export class InvalidCredentialsException extends ErrorException {
  constructor () {
    super('invalid_credentials_exception')
  }
}
