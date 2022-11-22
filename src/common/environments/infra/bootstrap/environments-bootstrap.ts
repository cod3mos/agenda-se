import { container } from 'tsyringe'
import { Bootstrap } from 'ts-node-backend'
import { DotEnvRepository } from '../dotenv/dotenv-repository'
import { EnvironmentsTypeEnum } from '../../domain/environments-type-enum'
import { GetEnvironmentsUseCase } from '../../application/get-environments-use-case'

export class EnvironmentsBootstrap implements Bootstrap {
  async handler (): Promise<void> {
    container.register(EnvironmentsTypeEnum.GET_ENVIRONMENTS, GetEnvironmentsUseCase)

    container.register(EnvironmentsTypeEnum.REPOSITORY, DotEnvRepository)
  }
}
