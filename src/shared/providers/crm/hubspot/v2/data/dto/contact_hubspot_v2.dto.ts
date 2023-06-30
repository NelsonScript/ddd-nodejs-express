// DTO
class ContactHubspotV2DTO {
  public email: string;
  public firstname: string;
  public lastname: string;
  public address:string;
  public dateOfBirth:string;
  public documentType:string; 
  public identificationNumber:string;  
  public mobilePhone:string;
  public phone:string;
  public photo:string;
  

  constructor(firstname: string, 
              lastname: string, 
              email: string, 
              address: string, 
              dateOfBirth:string, 
              documentType: string,
              identificationNumber: string,
              mobilePhone: string,
              phone:string,
              photo:string
              ) {
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

export default ContactHubspotV2DTO;