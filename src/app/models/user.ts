export class User {

    public uid: string;
    public nombre: string;
    public email: string;
    public password?: string;

    constructor(nombre?, email?, password?, uid?) {
        this.nombre = nombre;
        this.email = email;
        this.password = password;
        this.uid = uid;

    }
}