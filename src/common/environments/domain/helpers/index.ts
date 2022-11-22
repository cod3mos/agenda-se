import { resolve } from '../../../helpers'
import { EnvironmentsTypeEnum } from '../environments-type-enum'
import { GetEnvironmentsUseCase } from '../../application/get-environments-use-case'

export function getEnvironmentsService (): GetEnvironmentsUseCase {
  return resolve<GetEnvironmentsUseCase>(EnvironmentsTypeEnum.GET_ENVIRONMENTS)
}
