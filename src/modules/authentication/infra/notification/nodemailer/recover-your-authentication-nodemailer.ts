import { Authentication } from '../../../domain/authentication'
import { getEnvironmentsService } from '../../../../../common/environments/domain/helpers'
import { NodemailerService } from '../../../../../common/notification/nodemailer/nodemailer-service'
import { AuthenticationNotificationType } from '../../../domain/notification/authentication-notification-type'
import { RecoverYourAuthenticationNotification } from '../../../domain/notification/recover-your-authentication-notification'

export class RecoverYourAuthenticationNodemailer implements RecoverYourAuthenticationNotification {
  async send (authentication: Authentication): Promise<void> {
    const nodemailerService = await NodemailerService.create()
    const process = await getEnvironmentsService().execute()

    return await nodemailerService.send({
      to: {
        name: authentication.getName(),
        address: authentication.getEmail()
      },
      from: {
        name: process.getEnv().MAIL_FROM_NAME,
        address: process.getEnv().MAIL_FROM_ADDRESS
      },
      subject: 'Recuperação de senha',
      context: {
        email: authentication.getEmail(),
        access_token: authentication.getAccessToken()
      },
      template: AuthenticationNotificationType.RECOVER_YOUR_AUTHENTICATION
    })
  }
}
