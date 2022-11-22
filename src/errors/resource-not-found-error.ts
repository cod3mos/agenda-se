import { translate } from '../i18n'
import { ResponseError, ResponseErrorBody } from '../common/protocols/response-error'

export class ResourceNotFoundError implements ResponseError {
  constructor (private readonly error: Error) { }

  getStatusCode (): number {
    return 404
  }

  getBody (): ResponseErrorBody {
    return {
      code: this.error.message,
      message: translate('resource_not_found')
    }
  }
}
