import { DateTime } from 'luxon'
import { AuthenticationTest } from './authentication-test'

export class AuthenticationWithDataTest extends AuthenticationTest {
  constructor () {
    super({
      id: 1,
      name: 'any_name',
      phone: '1599999999',
      document: '24181900010',
      password: '$2b$12$mKlXP97IoprbEvHwntV9FuH1FWxM5zSjDEkqTJEFamD4a.ZGln2Pq',
      access_token: 'any_token',
      created_at: DateTime.now(),
      email: 'any_email@mail.com'
    })
  }
}
