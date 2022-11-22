import { Process } from 'ts-node-backend'
import koaServerProcess from './processes/koa-server-process'

const processes: Process[] = [koaServerProcess]

export default processes
