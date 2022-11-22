import { isNotNull } from 'ts-node-backend'
import { inject, injectable } from 'tsyringe'
import { DataSource, Repository } from 'typeorm'
import { Authentication } from '../../domain/authentication'
import { AuthenticationData } from '../../domain/authentication-data'
import { AuthenticationEntity } from './entities/authentication-entity'
import { filterOnlyValidProperties } from '../../../../common/helpers'
import { AuthenticationFilter } from '../../domain/filters/authentication-filter'
import { AuthenticationRepository } from '../../domain/authentication-repository'
import { DbConnectionTypeEnum } from '../../../../common/database/db-connection-type-enum'
import { AuthenticationEntityToAuthenticationAdapter } from './adapters/authentication-entity-to-authorization-adapter'

@injectable()
export class AuthenticationRepositoryMySql implements AuthenticationRepository {
  constructor (@inject(DbConnectionTypeEnum.DB_CONNECTION) protected connection: DataSource) { }

  private repository (): Repository<AuthenticationEntity> {
    return this.connection.getRepository(AuthenticationEntity)
  }

  async create (auth: AuthenticationData): Promise<Authentication> {
    const payload = {
      name: auth.getName(),
      email: auth.getEmail(),
      phone: auth.getPhone(),
      document: auth.getDocument(),
      password: auth.getPassword(),
      access_token: auth.getAccessToken()
    }

    const authenticationEntity = await this.repository().save(payload)

    return AuthenticationEntityToAuthenticationAdapter.from(authenticationEntity)
  }

  async getOneBy (filter: AuthenticationFilter): Promise<Authentication | null> {
    const where = filterOnlyValidProperties({ email: filter.getEmail() })

    const authenticationEntity = await this.repository().findOne({ where })

    if (isNotNull(authenticationEntity)) {
      return AuthenticationEntityToAuthenticationAdapter.from(authenticationEntity!)
    }

    return null
  }
}
