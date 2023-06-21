declare class ContactHubspotV2DTO {
    email: string;
    firstname: string;
    lastname: string;
    address: string;
    dateOfBirth: string;
    documentType: string;
    identificationNumber: string;
    mobilePhone: string;
    phone: string;
    photo: string;
    constructor(firstname: string, lastname: string, email: string, address: string, dateOfBirth: string, documentType: string, identificationNumber: string, mobilePhone: string, phone: string, photo: string);
}
export default ContactHubspotV2DTO;
