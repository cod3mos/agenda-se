import { container } from 'tsyringe'
import { Bootstrap } from 'ts-node-backend'
import { AuthenticationTypeEnum } from '../../domain/authentication-type-enum'
import { AuthenticationNotificationBootstrap } from './account-notification-bootstrap'
import { AuthenticationRepositoryMySql } from '../database/authentication-repository-mysql'
import { CreateAuthenticationUseCase } from '../../application/create-authentication-use-case'
import { RecoverAuthenticationUseCase } from '../../application/recover-authentication-use-case'
import { ValidateAuthenticationUseCase } from '../../application/validate-authentication-use-case'
import { AuthenticationRepositoryTest } from '../test/authentication-repository-test'

export class AuthenticationBootstrap implements Bootstrap {
  async handler (): Promise<void> {
    await new AuthenticationNotificationBootstrap().handler()
    container.register(AuthenticationTypeEnum.CREATE_AUTHORIZATION, CreateAuthenticationUseCase)
    container.register(AuthenticationTypeEnum.RECOVER_AUTHORIZATION, RecoverAuthenticationUseCase)
    container.register(AuthenticationTypeEnum.VALIDATE_AUTHORIZATION, ValidateAuthenticationUseCase)

    switch (process.env.NODE_ENV) {
      case 'test':
        container.register(AuthenticationTypeEnum.REPOSITORY, AuthenticationRepositoryTest)
        break
      default:
        container.register(AuthenticationTypeEnum.REPOSITORY, AuthenticationRepositoryMySql)
    }
  }
}
