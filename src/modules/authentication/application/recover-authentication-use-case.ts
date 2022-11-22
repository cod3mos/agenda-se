import { inject, injectable } from 'tsyringe'
import { isNull, throwIf } from 'ts-node-backend'
import { UseCase } from '../../../common/use-case/use-case'
import { getAuthenticationNotifierService } from '../domain/helpers'
import { AuthenticationTypeEnum } from '../domain/authentication-type-enum'
import { AuthenticationRepository } from '../domain/authentication-repository'
import { AuthenticationFilter } from '../domain/filters/authentication-filter'
import { UserNotFoundException } from '../domain/exceptions/user-not-found-exception'
import { AuthenticationNotificationType } from '../domain/notification/authentication-notification-type'

@injectable()
export class RecoverAuthenticationUseCase implements UseCase<void> {
  constructor (@inject(AuthenticationTypeEnum.REPOSITORY) private readonly authenticationRepository: AuthenticationRepository) {}

  async execute (filter: AuthenticationFilter): Promise<void> {
    const authentication = await this.authenticationRepository.getOneBy(new AuthenticationFilter({ email: filter.getEmail() }))

    throwIf(isNull(authentication), UserNotFoundException)

    await getAuthenticationNotifierService(AuthenticationNotificationType.RECOVER_YOUR_AUTHENTICATION).send(authentication)
  }
}
