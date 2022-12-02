import { Entity, Column , PrimaryGeneratedColumn , CreateDateColumn , UpdateDateColumn , OneToMany } from "typeorm";
import Contact from "./contacts.entity";
import { v4 as uuid } from 'uuid'

@Entity("client")
class Client {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column()
	fullname: string;

	@Column({ unique: true })
	email: string;

	@Column()
	cellphone: string;

	@Column()
	mobile: string;

	@CreateDateColumn()
	createdAt: Date;

	@OneToMany((type) => Contact, (contact) => contact.client)
	contact: Contact[];

	constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default Client;