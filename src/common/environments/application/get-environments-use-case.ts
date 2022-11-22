import { inject, injectable } from 'tsyringe'
import { UseCase } from '../../use-case/use-case'
import { Environments } from '../domain/environments'
import { EnvironmentsTypeEnum } from '../domain/environments-type-enum'
import { EnvironmentsRepository } from '../domain/environments-repository'

@injectable()
export class GetEnvironmentsUseCase implements UseCase<Environments> {
  constructor (@inject(EnvironmentsTypeEnum.REPOSITORY) private readonly environmentsRepository: EnvironmentsRepository) {}

  async execute (): Promise<Environments> {
    return await this.environmentsRepository.getEnv()
  }
}
