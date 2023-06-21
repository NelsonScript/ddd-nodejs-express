"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactHubspotV3Mapper = void 0;
const contacts_1 = require("@hubspot/api-client/lib/codegen/crm/contacts");
//import ContactHubspotV3Model from "../../domain/models/contact_hubspot_v3.model";
class ContactHubspotV3Mapper {
    static toPersistence = (contact) => {
        const simplePublicContact = new contacts_1.SimplePublicObject();
        Object.assign(simplePublicContact, {
            id: contact.id || "",
            createdAt: new Date(),
            updatedAt: new Date()
        });
        Object.assign(simplePublicContact, { properties: {} });
        for (const property in contact) {
            simplePublicContact.properties[property] = contact[property];
        }
        return simplePublicContact;
    };
    static toDTO(contact) {
        return {
            id: contact.id ? contact.id : "",
            address: contact.address ? contact.address : "",
            city: contact.municipio || "",
            documentType: contact.tipo_de_documento || "",
            dateOfBirth: contact.date_of_birth || "",
            email: contact.email || "",
            firstname: contact.firstname || "",
            identificationNumber: contact.n_mero_de_documento || "",
            lastname: contact.lastname || "",
            phone: contact.phone || "",
            mobilePhone: contact.mobilphone || ""
        };
    }
}
exports.ContactHubspotV3Mapper = ContactHubspotV3Mapper;
