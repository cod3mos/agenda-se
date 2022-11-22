import { DateTime } from 'luxon'
import { Authentication } from '../../domain/authentication'
import { AuthenticationData } from '../../domain/authentication-data'
import { AuthenticationRepository } from '../../domain/authentication-repository'
import { AuthenticationFilter } from '../../domain/filters/authentication-filter'
import { AuthenticationTest } from '../__test__/mocks/authentication-test'
import { AuthenticationWithDataTest } from '../__test__/mocks/authentication-with-data-test'

export class AuthenticationRepositoryTest implements AuthenticationRepository {
  private readonly authentications: Authentication[] = [new AuthenticationWithDataTest()]

  async create (auth: AuthenticationData): Promise<Authentication> {
    const authentication = new AuthenticationTest({
      name: auth.getName(),
      email: auth.getEmail(),
      phone: auth.getPhone(),
      document: auth.getDocument(),
      password: auth.getPassword(),
      access_token: auth.getAccessToken(),
      created_at: DateTime.now(),
      updated_at: undefined,
      id: this.authentications.length + 1
    })

    this.authentications.push(authentication)

    return await this.getOneBy(new AuthenticationFilter({ email: auth.getEmail() })) as Authentication
  }

  async getOneBy (filter: AuthenticationFilter): Promise<Authentication | null> {
    return this.authentications.find((auth) => filter.getEmail() === auth.getEmail()) ?? null
  }
}
