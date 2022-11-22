import { AuthenticationDataDTO } from '../../../modules/authentication/domain/authentication-data'

export interface Crypt {
  decrypt: (token: string) => Promise<string>
  encrypt: (value: AuthenticationDataDTO) => Promise<string>
}
