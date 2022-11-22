import { container } from 'tsyringe'
import { Bootstrap } from 'ts-node-backend'
import { DataSource } from '../data-source'
import { TypeOrmDbConnection } from '../type-orm-db-connection'
import { DbConnectionTypeEnum } from '../db-connection-type-enum'

export class DbConnectionBootstrap implements Bootstrap {
  async handler (): Promise<void> {
    const connection = await TypeOrmDbConnection.openConnection(DataSource)
    container.register(DbConnectionTypeEnum.DB_CONNECTION, { useValue: connection })
  }
}
