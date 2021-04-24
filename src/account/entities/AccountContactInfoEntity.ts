import {
  IAccountContactInfo,
  IAccountPersonalInfo,
  IAccountPrivateInfo,
} from '../interfaces/IAccount';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contact-info')
export class AccountContactInfoEntity implements IAccountContactInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountOwnerId: number;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: true })
  fb: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  skype: string;

  @Column({ nullable: true })
  vk: string;
}
