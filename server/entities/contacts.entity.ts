import { Entity, Column , PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from 'uuid'
import Client from "./clients.entity";

@Entity("contact")
class Contact {
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

	@ManyToOne((type) => Client,{
        eager: true, nullable: false
    })
	client: Client[]

    constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default Contact;