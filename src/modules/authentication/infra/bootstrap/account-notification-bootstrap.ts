import { Bootstrap } from 'ts-node-backend'
import { container } from 'tsyringe'
import { AuthenticationNotificationType } from '../../domain/notification/authentication-notification-type'
import { WelcomeToOurPlatformNodemailer } from '../notification/nodemailer/welcome-to-our-platform-nodemailer'
import { RecoverYourAuthenticationNodemailer } from '../notification/nodemailer/recover-your-authentication-nodemailer'

export class AuthenticationNotificationBootstrap implements Bootstrap {
  async handler (): Promise<void> {
    container.register(AuthenticationNotificationType.WELCOME_TO_OUR_PLATFORM, WelcomeToOurPlatformNodemailer)
    container.register(AuthenticationNotificationType.RECOVER_YOUR_AUTHENTICATION, RecoverYourAuthenticationNodemailer)
  }
}
