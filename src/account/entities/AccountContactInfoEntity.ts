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

  @Column({ default: 1 })
  accountOwnerId: number;

  @Column()
  email: string;

  @Column()
  fb: string;

  @Column()
  phone: string;

  @Column()
  skype: string;

  @Column()
  vk: string;
}
