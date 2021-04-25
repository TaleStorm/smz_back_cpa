import { IContract } from '../interfaces/IContract';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsArray, IsNumber, IsString } from 'class-validator';
import { AuthEntity } from '../../auth/entities/AuthEntity';

@Entity('contract')
export class ContractEntity implements IContract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text'})
  @IsString()
  readonly contractDescription: string;

  @Column()
  @IsString()
  readonly contractImageLink: string;

  @Column()
  @IsString()
  readonly contractName: string;

  @Column()
  @IsNumber()
  readonly contractOwnerId: number;

  @Column()
  @IsNumber()
  readonly contractPrice: number;

  @Column()
  @IsNumber()
  readonly contractType: number;

  @Column()
  readonly contractUuid: string;

  @Column({ default: 0 })
  readonly contractStatus: number;

  // @ManyToOne((type) => AuthEntity, (auth) => auth.id)
  // @JoinColumn({ name: 'id', referencedColumnName: 'id' })
  // account: AuthEntity;

  @CreateDateColumn()
  readonly createAt: Date;

  @UpdateDateColumn()
  readonly updateAt: Date;
}
