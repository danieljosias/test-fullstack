import { Entity, Column , PrimaryGeneratedColumn } from "typeorm";
import { v4 as uuid } from 'uuid'

@Entity("user")
class User {
	@PrimaryGeneratedColumn("uuid")
	id: string

	@Column({ unique: true })
	email: string;

    @Column()
    password: string;

	constructor() {
        if (!this.id) {
            this.id = uuid();
        }
    }
}

export default User;