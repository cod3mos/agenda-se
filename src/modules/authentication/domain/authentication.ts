import { DateTime } from 'luxon'
import { AuthenticationData, AuthenticationDataParams } from './authentication-data'

export interface AuthenticationParams extends AuthenticationDataParams {
  readonly id: number
  updated_at?: DateTime
  readonly created_at: DateTime
}

export abstract class Authentication extends AuthenticationData {
  constructor (protected params: AuthenticationParams) {
    super(params)
  }

  getId (): number {
    return this.params.id
  }

  getCreatedAt (): DateTime {
    return this.params.created_at
  }

  getUpdatedAt (): DateTime | undefined {
    return this.params?.updated_at
  }

  toJson (): any {
    return {
      access_token: this.getAccessToken()
    }
  }
}
