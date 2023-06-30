"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactHubspotV2Mapper = void 0;
const contact_hubspot_v2_dto_1 = __importDefault(require("../../../../../../../shared/providers/crm/hubspot/v2/data/dto/contact_hubspot_v2.dto"));
class ContactHubspotV2Mapper {
    toModel = (contact) => {
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
    toDTO(contact) {
        // Implementación para convertir un Contact Model en un ContactDTO
        return new contact_hubspot_v2_dto_1.default(contact.firstname, contact.lastname, contact.email, contact.address, contact.dateOfBirth, contact.documentType, contact.identificationNumber, contact.mobilePhone, contact.phone, contact.photo);
    }
}
exports.ContactHubspotV2Mapper = ContactHubspotV2Mapper;
