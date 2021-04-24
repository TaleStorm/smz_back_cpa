import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IAccountPersonalInfo } from '../interfaces/IAccount';

@Entity('personal-info')
export class AccountPersonalInfoEntity implements IAccountPersonalInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  accountOwnerId: number;

  @Column()
  birthDate: Date;

  @Column()
  city: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  passportDateIssue: Date;

  @Column()
  passportDivisionCode: string;

  @Column()
  passportNumber: number;

  @Column()
  passportSerial: number;

  @Column()
  passportWhomIssue: string;

  @Column()
  region: string;

  @Column()
  sex: number;

  @Column()
  surName: string;
}
