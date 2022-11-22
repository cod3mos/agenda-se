import { Rule } from '../../../../protocols/rule'

export class DocumentFormat implements Rule<RegExp> {
  static validate (): RegExp {
    return new DocumentFormat().getRule()
  }

  getRule (): RegExp {
    return /^\d{11,14}$/
  }
}
