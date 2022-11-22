import { ErrorException } from 'ts-node-backend'

export class UserAlreadyExistsException extends ErrorException {
  constructor () {
    super('user_already_exists')
  }
}
