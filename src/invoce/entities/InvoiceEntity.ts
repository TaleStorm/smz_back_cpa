import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";
import {IInvoice} from "../interfaces/IInvoice";

@Entity('invoice')
export class InvoiceEntity implements IInvoice {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    from: number;

    @Column()
    status: number;

    @Column()
    to: number;

    @CreateDateColumn()
    createAt: Date;

    @UpdateDateColumn()
    updateAt: Date;

}
