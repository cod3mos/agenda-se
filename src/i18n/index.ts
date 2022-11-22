import i18n from 'i18n'
import { LanguagesEnum } from './i18n-languages-enum'

i18n.configure({
  autoReload: true,
  updateFiles: false,
  locales: [LanguagesEnum.BR],
  directory: 'src/i18n/locales',
  defaultLocale: LanguagesEnum.BR
})

export const translate = i18n.__
export const pluralize = i18n.__n
export const translator = { translate: i18n.__, pluralize: i18n.__n }
