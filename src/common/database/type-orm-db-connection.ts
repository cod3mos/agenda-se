import { DataSource } from 'typeorm'
import { not } from 'ts-node-backend'

export class TypeOrmDbConnection {
  static async openConnection (dataSource: DataSource): Promise<DataSource> {
    if (not(dataSource.isInitialized)) {
      await dataSource.initialize()
    }

    return dataSource
  }
}
