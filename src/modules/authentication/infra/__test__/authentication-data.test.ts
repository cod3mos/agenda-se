import 'reflect-metadata'

import { Authentication } from '../../domain/authentication'
import { AuthenticationDataTest } from './mocks/authentication-data-test'
import { AuthenticationFilterTest } from './mocks/authentication-filter-test'
import { AuthenticationBootstrap } from '../bootstrap/authentication-bootstrap'
import { UserNotFoundException } from '../../domain/exceptions/user-not-found-exception'
import { AuthenticationFilterWithDataTest } from './mocks/authentication-filter-with-data-test'
import { CryptographyBootstrap } from '../../../../common/cryptography/bootstrap/cryptography-bootstrap'
import { EnvironmentsBootstrap } from '../../../../common/environments/infra/bootstrap/environments-bootstrap'
import { getCreateAuthenticationService, getRecoverAuthenticationService, getValidateAuthenticationService } from '../../domain/helpers'

describe('Authentication', () => {
  beforeAll(async () => {
    await Promise.all([
      new EnvironmentsBootstrap().handler(),
      new CryptographyBootstrap().handler(),
      new AuthenticationBootstrap().handler()
    ])
  })

  it('create authentication', async () => {
    const authentication = new AuthenticationDataTest()
    const authenticationCreated = await getCreateAuthenticationService().execute(authentication)

    expect(authenticationCreated).toBeInstanceOf(Authentication)
    expect(authenticationCreated.getAccessToken()).toBe(authentication.getAccessToken())
  })

  it('validate authentication', async () => {
    const authenticationFilter = new AuthenticationFilterWithDataTest()
    const authenticationCreated = await getValidateAuthenticationService().execute(authenticationFilter)

    expect(authenticationCreated).toBeInstanceOf(Authentication)
    expect(authenticationCreated.getEmail()).toBe(authenticationFilter.getEmail())
  })

  it('return a user not found exception', async () => {
    try {
      await getRecoverAuthenticationService().execute(new AuthenticationFilterTest({ email: '' }))
    } catch (error) {
      expect(error).toBeInstanceOf(UserNotFoundException)
    }
  })
})
