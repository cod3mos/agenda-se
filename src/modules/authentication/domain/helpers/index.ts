import { resolve } from '../../../../common/helpers'
import { AuthenticationTypeEnum } from '../authentication-type-enum'
import { AuthenticationNotification } from '../notification/authentication-notification'
import { CreateAuthenticationUseCase } from '../../application/create-authentication-use-case'
import { RecoverAuthenticationUseCase } from '../../application/recover-authentication-use-case'
import { AuthenticationNotificationType } from '../notification/authentication-notification-type'
import { ValidateAuthenticationUseCase } from '../../application/validate-authentication-use-case'

export function getCreateAuthenticationService (): CreateAuthenticationUseCase {
  return resolve<CreateAuthenticationUseCase>(AuthenticationTypeEnum.CREATE_AUTHORIZATION)
}

export function getRecoverAuthenticationService (): RecoverAuthenticationUseCase {
  return resolve<RecoverAuthenticationUseCase>(AuthenticationTypeEnum.RECOVER_AUTHORIZATION)
}

export function getValidateAuthenticationService (): ValidateAuthenticationUseCase {
  return resolve<ValidateAuthenticationUseCase>(AuthenticationTypeEnum.VALIDATE_AUTHORIZATION)
}

export function getAuthenticationNotifierService (type: AuthenticationNotificationType): AuthenticationNotification {
  return resolve<AuthenticationNotification>(type)
}
