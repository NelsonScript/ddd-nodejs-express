"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// DTO
class ContactHubspotV2Model {
    email;
    firstname;
    lastname;
    address;
    dateOfBirth;
    documentType;
    identificationNumber;
    mobilePhone;
    phone;
    photo;
    constructor(firstname, lastname, email, address, dateOfBirth, documentType, identificationNumber, mobilePhone, phone, photo) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.documentType = documentType;
        this.identificationNumber = identificationNumber;
        this.mobilePhone = mobilePhone;
        this.phone = phone;
        this.photo = photo;
    }
}
exports.default = ContactHubspotV2Model;
