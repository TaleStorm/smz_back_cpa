import { IApplication } from '../interfaces/IApplication';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('application-list')
export class ApplicationEntity implements IApplication {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contractId: number;

  @Column()
  accountExecutorId: number;

  @Column()
  applicationStatus: number;
}
