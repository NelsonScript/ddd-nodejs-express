class ContactModel {
  private _firstname: string;
  private _lastname: string;
  private _email: string;
  private _phone: string;

  constructor(firstname: string, lastname:string, email: string, phone: string) {
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
    this._phone = phone;
  }

  get firstname():string {
    return this._firstname;
  }
  get lastname(): string {
    return this._lastname;
  }
  get email(): string {
    return this._email;
  }
  get phone(): string {
    return this._phone;
  }
}

export default ContactModel