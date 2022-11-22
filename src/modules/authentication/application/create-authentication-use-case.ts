import { inject, injectable } from 'tsyringe'
import { isNotNull, throwIf } from 'ts-node-backend'
import { Authentication } from '../domain/authentication'
import { UseCase } from '../../../common/use-case/use-case'
import { AuthenticationData } from '../domain/authentication-data'
import { getAuthenticationNotifierService } from '../domain/helpers'
import { Crypt, Hasher } from '../../../common/protocols/cryptography'
import { AuthenticationTypeEnum } from '../domain/authentication-type-enum'
import { AuthenticationFilter } from '../domain/filters/authentication-filter'
import { AuthenticationRepository } from '../domain/authentication-repository'
import { BcryptTypeEnum } from '../../../common/cryptography/bcrypt/bcrypt-type-enum'
import { JwtEncryptTypeEnum } from '../../../common/cryptography/jwt/jwt-encrypt-type-enum'
import { UserAlreadyExistsException } from '../domain/exceptions/user-already-exists-exception'
import { AuthenticationNotificationType } from '../domain/notification/authentication-notification-type'

@injectable()
export class CreateAuthenticationUseCase implements UseCase<Authentication> {
  constructor (
    @inject(BcryptTypeEnum.BCRYPT) protected hasher: Hasher,
    @inject(JwtEncryptTypeEnum.JWT_ENCRYPT) protected jwtEncrypt: Crypt,
    @inject(AuthenticationTypeEnum.REPOSITORY) private readonly authenticationRepository: AuthenticationRepository
  ) {}

  async execute (data: AuthenticationData): Promise<Authentication> {
    const authentication = await this.authenticationRepository.getOneBy(new AuthenticationFilter({ email: data.getEmail() }))

    throwIf(isNotNull(authentication), UserAlreadyExistsException)

    const hashedPasswordData = await data.encryptPassword(this.hasher)
    const hashedData = await hashedPasswordData.createAccessToken(this.jwtEncrypt)
    const authenticationCreated = await this.authenticationRepository.create(hashedData)

    await getAuthenticationNotifierService(AuthenticationNotificationType.WELCOME_TO_OUR_PLATFORM).send(authenticationCreated)

    return authenticationCreated
  }
}
