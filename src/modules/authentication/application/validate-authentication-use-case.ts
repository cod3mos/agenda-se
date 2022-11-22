import { inject, injectable } from 'tsyringe'
import { isNull, not, throwIf } from 'ts-node-backend'
import { Authentication } from '../domain/authentication'
import { UseCase } from '../../../common/use-case/use-case'
import { Hasher } from '../../../common/protocols/cryptography'
import { AuthenticationTypeEnum } from '../domain/authentication-type-enum'
import { AuthenticationRepository } from '../domain/authentication-repository'
import { AuthenticationFilter } from '../domain/filters/authentication-filter'
import { BcryptTypeEnum } from '../../../common/cryptography/bcrypt/bcrypt-type-enum'
import { InvalidCredentialsException } from '../domain/exceptions/invalid-credentials-exception'

@injectable()
export class ValidateAuthenticationUseCase implements UseCase<Authentication> {
  constructor (
    @inject(BcryptTypeEnum.BCRYPT) protected hasher: Hasher,
    @inject(AuthenticationTypeEnum.REPOSITORY) private readonly authenticationRepository: AuthenticationRepository
  ) {}

  async execute (filter: AuthenticationFilter): Promise<Authentication> {
    const authentication = await this.authenticationRepository.getOneBy(new AuthenticationFilter({ email: filter.getEmail() }))

    throwIf(isNull(authentication), InvalidCredentialsException)

    const compareResult = await this.hasher.compare(filter.getPassword()!, authentication!.getPassword())

    throwIf(not(compareResult), InvalidCredentialsException)

    return authentication!
  }
}
