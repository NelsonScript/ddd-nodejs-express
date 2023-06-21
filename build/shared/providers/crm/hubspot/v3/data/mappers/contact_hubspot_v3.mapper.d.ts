import { SimplePublicObject } from "@hubspot/api-client/lib/codegen/crm/contacts";
import ContactHubspotV3Entity from "../../domain/entities/contact_hubspot_v3.entity";
declare class ContactHubspotV3Mapper {
    static toPersistence: (contact: any) => SimplePublicObject;
    static toDTO(contact: any): ContactHubspotV3Entity;
}
export { ContactHubspotV3Mapper };
