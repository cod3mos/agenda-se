import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateAuthentication1665197637288 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'authentication',
      columns: [
        {
          name: 'id',
          type: 'int',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'name',
          type: 'varchar',
          length: '255'
        },
        {
          name: 'email',
          type: 'varchar',
          length: '255',
          isUnique: true
        },
        {
          name: 'phone',
          type: 'varchar',
          length: '30'
        },
        {
          name: 'document',
          type: 'varchar',
          length: '14'
        },
        {
          name: 'password',
          type: 'varchar',
          length: '255'
        },
        {
          name: 'access_token',
          type: 'longtext',
          isNullable: false
        },
        {
          name: 'created_at',
          type: 'datetime',
          isNullable: false,
          default: 'CURRENT_TIMESTAMP'
        },
        {
          name: 'updated_at',
          type: 'datetime',
          isNullable: true,
          onUpdate: 'CURRENT_TIMESTAMP'
        }
      ]
    })

    await queryRunner.createTable(table)
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('authentication')
  }
}
