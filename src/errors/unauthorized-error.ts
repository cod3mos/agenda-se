import { translate } from '../i18n'
import { ErrorException } from 'ts-node-backend'
import { ResponseError, ResponseErrorBody } from '../common/protocols/response-error'

export class UnauthorizedError implements ResponseError {
  constructor (private readonly error: ErrorException) {}

  getStatusCode (): number {
    return 401
  }

  getBody (): ResponseErrorBody {
    return {
      code: this.error.message,
      message: translate('unauthorized')
    }
  }
}
