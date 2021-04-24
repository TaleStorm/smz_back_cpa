import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IAccountPrivateInfo } from '../interfaces/IAccount';

@Entity('private-info')
export class AccountPrivateInfoEntity implements IAccountPrivateInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 1 })
  accountOwnerId: number;

  @Column()
  bankName: string;

  @Column()
  bic: number;

  @Column()
  cardHolder: number;

  @Column()
  cardNumber: number;

  @Column()
  correspondentAccount: number;

  @Column()
  payDetail: string;

  @Column()
  paymentAccount: number;

  @Column()
  inn: string;

  @Column()
  pfr: string;
}
