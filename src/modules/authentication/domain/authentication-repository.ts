import { Authentication } from './authentication'
import { AuthenticationData } from './authentication-data'
import { AuthenticationFilter } from './filters/authentication-filter'

export interface AuthenticationRepository {
  create: (data: AuthenticationData) => Promise<Authentication>
  getOneBy: (filter: AuthenticationFilter) => Promise<Authentication | null>
}
