import { Entity, Column , PrimaryGeneratedColumn , CreateDateColumn , UpdateDateColumn , OneToMany } from "typeorm";
//entity contact here

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

	/* @OneToMany((type) => Client, (client) => client.contact)
	client: Client[]; */
}

export default Client;