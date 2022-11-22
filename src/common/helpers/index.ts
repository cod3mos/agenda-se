import { container } from 'tsyringe'

export function resolve<SERVICE> (name: string): SERVICE {
  return container.resolve<SERVICE>(name)
}

export const isDefined = (value: any): boolean => value !== undefined

export function filterOnlyValidProperties (data: any): any {
  const onlyValidValues = (item: any): boolean => isDefined(item[1])

  return Object.fromEntries(Object.entries(data).filter(onlyValidValues))
}
