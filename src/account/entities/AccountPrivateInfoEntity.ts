import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IAccountPrivateInfo } from '../interfaces/IAccount';

@Entity('private-info')
export class AccountPrivateInfoEntity implements IAccountPrivateInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountOwnerId: number;

  @Column({ nullable: true })
  bankName: string;

  @Column({ nullable: true })
  bic: number;

  @Column({ nullable: true })
  cardHolder: number;

  @Column({ nullable: true })
  cardNumber: number;

  @Column({ nullable: true })
  correspondentAccount: number;

  @Column({ nullable: true })
  payDetail: string;

  @Column({ nullable: true })
  paymentAccount: number;

  @Column({ nullable: true })
  inn: string;

  @Column({ nullable: true })
  pfr: string;
}
