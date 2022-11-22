import { ErrorException } from 'ts-node-backend'

export interface ValidationErrorsParams {
  code: string
  field: string
}

export class ValidationErrorException extends ErrorException {
  protected errors: ValidationErrorsParams[]

  constructor (errors: ValidationErrorsParams[]) {
    super('validation_error')
    this.errors = errors
  }
}
