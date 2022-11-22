import { DateTime } from 'luxon'
import { Authentication } from '../../../domain/authentication'
import { AuthenticationEntity } from '../entities/authentication-entity'

export class AuthenticationEntityToAuthenticationAdapter extends Authentication {
  constructor (authentication: AuthenticationEntity) {
    super({
      id: authentication.id,
      name: authentication.name,
      email: authentication.email,
      phone: authentication.phone,
      document: authentication.document,
      password: authentication.password,
      access_token: authentication.access_token,
      created_at: DateTime.fromJSDate(authentication.created_at)
    })
  }

  static from (authentication: AuthenticationEntity): Authentication {
    return new AuthenticationEntityToAuthenticationAdapter(authentication)
  }
}
