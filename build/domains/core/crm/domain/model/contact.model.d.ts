declare class ContactModel {
    private _firstname;
    private _lastname;
    private _email;
    private _phone;
    constructor(firstname: string, lastname: string, email: string, phone: string);
    get firstname(): string;
    get lastname(): string;
    get email(): string;
    get phone(): string;
}
export default ContactModel;
