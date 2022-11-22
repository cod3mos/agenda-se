export interface Hasher {
  hash: (value: string) => Promise<string>
  compare: (hashValue: string, value: string) => Promise<boolean>
}
