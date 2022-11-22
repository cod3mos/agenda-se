import { isNotEmpty, not } from 'ts-node-backend'
import { EnvironmentsEnum } from './environments-enum'
import { EnvironmentsNotFound } from './exceptions/environments-not-found'

export interface Secrets {
  PORT: string
  DB_HOST: string
  DB_PORT: string
  DB_NAME: string
  DB_TYPE: string
  DB_USERNAME: string
  DB_PASSWORD: string
  MAIL_PORT: string
  MAIL_HOST: string
  MAIL_FROM_NAME: string
  MAIL_FROM_ADDRESS: string
  MAIL_FROM_PASSWORD: string
  JWT_SECRET: string
}

export class Environments {
  constructor (private readonly secrets: Secrets) {
    this.valid(this.secrets)
  }

  getEnv (): Secrets {
    return this.secrets
  }

  private valid (env: any): void {
    const errors: string[] = []
    const environmentsList = Object.keys(EnvironmentsEnum)

    for (const environment of environmentsList) {
      if (not(env[environment])) {
        errors.push(environment)
      }
    }

    if (isNotEmpty(errors)) {
      throw new EnvironmentsNotFound(errors)
    }
  }
}
