import bcrypt from 'bcrypt'

import { Hasher } from '../../protocols/cryptography'

export class Bcrypt implements Hasher {
  async hash (value: string): Promise<string> {
    return await bcrypt.hash(value, 12)
  }

  async compare (value: string, hashValue: string): Promise<boolean> {
    return await bcrypt.compare(value, hashValue)
  }
}
