import { uuid } from "uuidv4";

export class User {
	public readonly id?: string;

	public name: string;
	public email: string;
	public password: string;

	constructor(props: Omit<User, "id">, id?: string) {
		this.email = props.email;
		this.name = props.name;
		this.password = props.password;

		if (!id) {
			this.id = uuid();
		}
	}
}
