import { Rule } from '../../../../protocols/rule'

export class PhoneFormat implements Rule<RegExp> {
  static validate (): RegExp {
    return new PhoneFormat().getRule()
  }

  getRule (): RegExp {
    return /^\d{10,11}$/
  }
}
