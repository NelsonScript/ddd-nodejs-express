class ContactHubspotV3Model {
  private _address: string;
  private _city: string;
  private _company: string;
  private _dateOfBirth: string;
  private _documentType: string;
  private _email: string;
  private _firstname: string;
  private _identificationNumber: string;
  private _lastname: string;
  private _mobilePhone: string;
  private _phone: string;

  constructor(fields: any) {
    const { address, city, company, dateOfBirth, documentType, email, firstname, identificationNumber, lastname, mobilePhone, phone } = fields;
    this._address = address;
    this._city = city;
    this._company = company;
    this._dateOfBirth = dateOfBirth;
    this._documentType = documentType;
    this._email = email;
    this._firstname = firstname;
    this._identificationNumber = identificationNumber; 
    this._lastname = lastname;
    this._mobilePhone = mobilePhone;
    this._phone = phone;    
  }

  get address(){
    return this._address;
  }

  get city(){
    return this._city;
  }
  
  get company() {
    return this._company;
  }

  get dateOfBirth() {
    return this._dateOfBirth;
  }

  get documentType() {
    return this._documentType;
  }

  get email() {
    return this._email;
  }

  get firstname() {
    return this._firstname;
  }

  get identificationNumber() {
    return this._identificationNumber;
  }

  get lastname() {
    return this._lastname;
  }

  get mobilePhone() {
    return this._mobilePhone;
  }

  get phone() {
    return this._phone;
  }



}

export default ContactHubspotV3Model;