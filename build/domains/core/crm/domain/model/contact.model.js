"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContactModel {
    _firstname;
    _lastname;
    _email;
    _phone;
    constructor(firstname, lastname, email, phone) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._email = email;
        this._phone = phone;
    }
    get firstname() {
        return this._firstname;
    }
    get lastname() {
        return this._lastname;
    }
    get email() {
        return this._email;
    }
    get phone() {
        return this._phone;
    }
}
exports.default = ContactModel;
