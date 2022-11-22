import { Authentication } from '../../../domain/authentication'
import { getEnvironmentsService } from '../../../../../common/environments/domain/helpers'
import { NodemailerService } from '../../../../../common/notification/nodemailer/nodemailer-service'
import { AuthenticationNotificationType } from '../../../domain/notification/authentication-notification-type'
import { WelcomeToOurPlatformNotification } from '../../../domain/notification/welcome-to-our-platform-notification'

export class WelcomeToOurPlatformNodemailer implements WelcomeToOurPlatformNotification {
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
      subject: 'Primeiros passos',
      context: { access_token: authentication.getAccessToken() },
      template: AuthenticationNotificationType.WELCOME_TO_OUR_PLATFORM
    })
  }
}
