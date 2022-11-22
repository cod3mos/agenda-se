import dotenv from 'dotenv'

import { Environments } from '../../domain/environments'
import { DotEnvProcessAdapter } from './adapter/dotenv-process-adapter'
import { EnvironmentsRepository } from '../../domain/environments-repository'

export class DotEnvRepository implements EnvironmentsRepository {
  async getEnv (): Promise<Environments> {
    dotenv.config()

    return DotEnvProcessAdapter.from(process.env)
  }
}
