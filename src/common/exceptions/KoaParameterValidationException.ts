import { ValidationErrorException, ValidationErrorsParams } from '../../errors/exceptions/validation-error-exception'

export interface KoaParameterError {
  params: any
  code: string
  message: string
  errors: ValidationErrorsParams[]
}

export class KoaParameterValidationException extends ValidationErrorException {
  private readonly params: {}
  private readonly code: string

  constructor (error: KoaParameterError) {
    super(error.errors)
    this.code = error.code
    this.params = error.params
    this.message = error.message
  }

  getCode (): string {
    return this.code
  }

  getErrors (): any[] {
    return this.errors
  }

  getParams (): any {
    return this.params
  }
}
