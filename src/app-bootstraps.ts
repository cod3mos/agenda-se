import { Bootstrap } from 'ts-node-backend'
import { DbConnectionBootstrap } from './common/database/bootstrap/db-connection-bootstrap'
import { CryptographyBootstrap } from './common/cryptography/bootstrap/cryptography-bootstrap'
import { EnvironmentsBootstrap } from './common/environments/infra/bootstrap/environments-bootstrap'
import { AuthenticationBootstrap } from './modules/authentication/infra/bootstrap/authentication-bootstrap'

const bootstraps: Bootstrap[] = [
  new EnvironmentsBootstrap(),
  new CryptographyBootstrap(),
  new DbConnectionBootstrap(),
  new AuthenticationBootstrap()
]

export default bootstraps
