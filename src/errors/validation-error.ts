import { translate } from '../i18n'
import { ResponseError, ResponseErrorBody } from '../common/protocols/response-error'

export class ValidationError implements ResponseError {
  constructor (private readonly error: any) {}

  getStatusCode (): number {
    return 400
  }

  getBody (): ResponseErrorBody {
    return {
      code: 'validation_error',
      message: translate('validation_error'),
      errors: this.error.errors.map(error => ({
        code: error.code,
        field: error.field,
        message: error.message
      }))
    }
  }
}
