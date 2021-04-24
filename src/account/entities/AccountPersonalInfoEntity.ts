import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IAccountPersonalInfo } from '../interfaces/IAccount';

@Entity('personal-info')
export class AccountPersonalInfoEntity implements IAccountPersonalInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  accountOwnerId: number;

  @Column({ nullable: true })
  birthDate: Date;

  @Column({ nullable: true })
  city: string;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  passportDateIssue: Date;

  @Column({ nullable: true })
  passportDivisionCode: string;

  @Column({ nullable: true })
  passportNumber: number;

  @Column({ nullable: true })
  passportSerial: number;

  @Column({ nullable: true })
  passportWhomIssue: string;

  @Column({ nullable: true })
  region: string;

  @Column({ nullable: true })
  sex: number;

  @Column({ nullable: true })
  surName: string;

  @Column({ default: 1 })
  role: number;
}
