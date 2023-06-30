import ContactHubspotV2Model from "../../../../../../../shared/providers/crm/hubspot/v2/domain/model/contact_hubspot_v2.model";
import ContactHubspotV2DTO from "../../../../../../../shared/providers/crm/hubspot/v2/data/dto/contact_hubspot_v2.dto";

class ContactHubspotV2Mapper {
  toModel = (contact: ContactHubspotV2DTO): any => {
    return {
      properties: [
        { property: "address", value: contact.address },
        { property: "date_of_birth", value: contact.dateOfBirth },
        { property: "firstname", value: contact.firstname },
        { property: "lastname", value: contact.lastname },
        { property: "tipo_de_documento", value: contact.documentType },
        { property: "email", value: contact.email ? contact.email : "" },
        { property: "n_mero_de_documento", value: contact.identificationNumber },
        { property: "numero_de_documento", value: contact.identificationNumber },
        { property: "n_mero_de_tel_fono_celular", value: contact.mobilePhone },
        { property: "mobilephone", value: contact.mobilePhone },
        { property: "phone", value: contact.phone },
        { property: "photo", value: contact.photo },
      ],
    };
  };

  toDTO(contact: ContactHubspotV2Model): ContactHubspotV2DTO {
    // Implementación para convertir un Contact Model en un ContactDTO
    return new ContactHubspotV2DTO(contact.firstname, 
                          contact.lastname, 
                          contact.email,
                          contact.address,
                          contact.dateOfBirth,
                          contact.documentType,
                          contact.identificationNumber,
                          contact.mobilePhone,
                          contact.phone,
                          contact.photo
                          );
  }

  // toPersistence(contact: any): ContactHubspotV2Model {
  //   return {
  //     id: contact.hs_object_id ? contact.hs_object_id.value : 0,
  //     address: contact.address ? contact.address.value : "",
  //     documentType: contact.documentType ? contact.documentType.value : "",
  //     email: contact.email ? contact.email.value : "",
  //     firstname: contact.firstname ? contact.firstname.value : 0,
  //     identificationNumber: contact.identificationNumber ? contact.identificationNumber.value : 0,
  //     lastname: contact.lastname ? contact.lastname.value : "",
  //     mobilePhone: contact.phone ? contact.phone.value : 0,
  //   };
  // }
}

export { ContactHubspotV2Mapper };