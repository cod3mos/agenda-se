import { NotFoundErrorException } from 'ts-node-backend'

export class UserNotFoundException extends NotFoundErrorException {
  constructor () {
    super('user_not_found_exception')
  }
}
