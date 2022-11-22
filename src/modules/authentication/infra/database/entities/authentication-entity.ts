import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('authentication')
export class AuthenticationEntity {
  @PrimaryGeneratedColumn()
  public readonly id: number

  @Column({ type: 'varchar', length: 255 })
  public name: string

  @Column({ type: 'varchar', length: 255 })
  public email: string

  @Column({ type: 'varchar', length: 30 })
  public phone: string

  @Column({ type: 'varchar', length: 14 })
  public document: string

  @Column({ type: 'varchar', length: 255 })
  public password: string

  @Column({ type: 'longtext', nullable: false })
  public access_token: string

  @CreateDateColumn({ type: 'datetime', default: 'CURRENT_TIMESTAMP', nullable: false })
  public created_at: Date

  @UpdateDateColumn({ type: 'datetime', onUpdate: 'CURRENT_TIMESTAMP', nullable: true })
  public updated_at: Date
}
