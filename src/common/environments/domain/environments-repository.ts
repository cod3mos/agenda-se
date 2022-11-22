import { Environments } from './environments'

export interface EnvironmentsRepository {
  getEnv: () => Promise<Environments>
}
