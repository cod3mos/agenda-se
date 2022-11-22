
import path from 'path'
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'
import hbs from 'nodemailer-express-handlebars'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

import { Notification } from '../notification'
import { getEnvironmentsService } from '../../environments/domain/helpers'

interface AddressDTO {
  name: string
  address: string
}

export interface NodemailerDTO {
  to: AddressDTO
  from: AddressDTO
  subject: string
  template: string
  context: Record<string, string>
}

export class NodemailerService implements Notification<NodemailerDTO> {
  private readonly transporter: Mail

  constructor (options: SMTPTransport.Options) {
    this.transporter = nodemailer.createTransport(options)

    this.transporter.use('compile', hbs({
      viewEngine: {
        extname: '.html',
        partialsDir: path.resolve(__dirname, '../templates'),
        defaultLayout: false
      },
      extName: '.handlebars',
      viewPath: path.resolve(__dirname, '../templates')
    }))
  }

  static async create (): Promise<NodemailerService> {
    const process = await getEnvironmentsService().execute()

    return new NodemailerService({
      host: process.getEnv().MAIL_HOST,
      port: Number(process.getEnv().MAIL_PORT),
      auth: {
        user: process.getEnv().MAIL_FROM_ADDRESS,
        pass: process.getEnv().MAIL_FROM_PASSWORD
      }
    })
  }

  async send (emailOptions: NodemailerDTO): Promise<void> {
    const mailOptions = {
      to: {
        name: emailOptions.to.name,
        address: emailOptions.to.address
      },
      from: {
        name: emailOptions.from.name,
        address: emailOptions.from.address
      },
      subject: emailOptions.subject,
      context: emailOptions.context,
      template: emailOptions.template
    }

    await this.transporter.sendMail(mailOptions)
  }
}
