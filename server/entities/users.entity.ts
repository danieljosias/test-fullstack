import { Entity, Column , PrimaryGeneratedColumn , JoinColumn, OneToOne } from "typeorm";
import { v4 as uuid } from 'uuid'
import Client from "./clients.entity";
import Contact from "./contacts.entity";

@Entity("user")
class User {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column({ unique: true })
	email: string;

    @Column()
    password: string;

    @OneToOne((type) => Client)@JoinColumn()
    client: Client

    @OneToOne((type) => Contact)@JoinColumn()
    contact: Contact

	constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default User;