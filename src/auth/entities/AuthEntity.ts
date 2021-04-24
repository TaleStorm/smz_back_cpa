import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IAuth } from '../interfaces/IAuth';

@Entity('auth')
export class AuthEntity implements IAuth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  vkId: number;
}
