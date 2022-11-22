import dotenv from 'dotenv'

import { DataSource as DataSourceOptions } from 'typeorm'

dotenv.config()

type TypeOrmDatabaseType = 'mysql'

export const DataSource = new DataSourceOptions({
  type: process.env.DB_TYPE as TypeOrmDatabaseType,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  entities: [__dirname + '/../../modules/**/infra/database/entities/*-entity.{ts,js}']
})
