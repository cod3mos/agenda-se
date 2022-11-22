import { translate } from '../i18n'
import { ResponseError, ResponseErrorBody } from '../common/protocols/response-error'

export class InternalServerError implements ResponseError {
  getStatusCode (): number {
    return 500
  }

  getBody (): ResponseErrorBody {
    return {
      code: 'internal_server_error',
      message: translate('internal_server_error')
    }
  }
}
