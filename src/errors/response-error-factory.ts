import { ErrorException } from 'ts-node-backend'
import { ValidationError } from './validation-error'
import { BadRequestError } from './bad-request-error'
import { UnauthorizedError } from './unauthorized-error'
import { InternalServerError } from './internal-server-error'
import { ResponseError } from '../common/protocols/response-error'
import { UnauthorizedException } from './exceptions/unauthorized-exception'
import { ValidationErrorException } from './exceptions/validation-error-exception'

export class ResponseErrorFactory {
  static from (error: unknown): ResponseError {
    if (error instanceof ValidationErrorException) {
      return new ValidationError(error)
    }

    if (error instanceof ErrorException) {
      return new BadRequestError(error)
    }

    if (error instanceof UnauthorizedException) {
      return new UnauthorizedError(error)
    }

    return new InternalServerError()
  }
}
