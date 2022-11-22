import 'reflect-metadata'

import processes from './app-processes'
import bootstraps from './app-bootstraps'

import { Application } from 'ts-node-backend'

const app = Application.create(bootstraps)

for (const process of processes) {
  app.addProcess(process)
}

void app.run()
