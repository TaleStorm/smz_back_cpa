import { IAccountBalance } from '../interfaces/IAccount';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AuthEntity } from '../../auth/entities/AuthEntity';

@Entity('account-balance')
export class AccountBalanceEntity implements IAccountBalance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  balanceAmount: number;

  @Column()
  balanceOwnerId: number;

  @OneToOne(() => AuthEntity, (auth) => auth.id)
  @JoinColumn({
    name: 'balanceOwnerId',
    referencedColumnName: 'id',
  })
  account: AuthEntity;
}
