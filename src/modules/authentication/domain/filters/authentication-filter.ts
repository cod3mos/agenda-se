
export interface AuthenticationFilterParams {
  email?: string
  password?: string
}

export class AuthenticationFilter {
  constructor (protected params: AuthenticationFilterParams) { }

  getEmail (): string | undefined {
    return this.params.email
  }

  getPassword (): string | undefined {
    return this.params.password
  }
}
