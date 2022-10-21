import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from "typeorm";

@Entity()
class Person {
    
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    firstName: String;

    @Column()
    lastName: String;

    @Column()
    phone: String;

    @Column()
    email: String;

    @Column()
    cpf: String;

    @CreateDateColumn()
    create_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    constructor(firstName: string, lastName: string, phone: string, email: string, cpf: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.cpf = cpf;
    }

}

export { Person }