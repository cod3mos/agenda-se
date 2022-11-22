import { Environments, Secrets } from '../../../domain/environments'

export class DotEnvProcessAdapter extends Environments {
  constructor (secrets: Secrets) {
    super(secrets)
  }

  static from (env: any): Environments {
    return new DotEnvProcessAdapter(env)
  }
}
