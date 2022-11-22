import { Authentication } from '../authentication'
import { AuthenticationNotification } from './authentication-notification'

export interface WelcomeToOurPlatformNotification extends AuthenticationNotification<Authentication> {}
