import { translate } from '../i18n'
import { ResponseError, ResponseErrorBody } from '../common/protocols/response-error'

export class BadRequestError implements ResponseError {
  constructor (private readonly error: Error) {}

  getStatusCode (): number {
    return 400
  }

  getBody (): ResponseErrorBody {
    return {
      code: this.error.message,
      message: translate(this.error.message)
    }
  }
}
