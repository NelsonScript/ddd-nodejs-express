import ContactModel from "../../domain/model/contact.model";

class ContactMapper {
  static toDTO = (contact: ContactModel): Object => {
    return {
      properties: [
        { property: "firstname", value: contact.firstname ? contact.firstname : "" },
        { property: "lastname", value: contact.lastname },
        { property: "email", value: contact.email },
        { property: "phone", value: contact.phone},
      ],
    };
  };

  static toJSON = (obj:any):Object => {

    return { firstname: obj['properties'].firstname,
             lastname: obj['properties'].lastname,
             email: obj['properties'].email,
             phone: obj['properties'].phone
            }
      

  }

  // static toPersistence(contact: any): ContactEntity {
  //   return {
  //     firstname: contact.contactname ? contact.contactname.value : "",
  //     lastname: contact.lastname ? contact.lastname.value : "",
  //     email: contact.pipeline ? contact.pipeline.value : "",
  //     phone: contact.turno ? contact.turno.value : "",
  //   };
  // }
}

export default ContactMapper;