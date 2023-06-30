import ContactHubspotV3Entity from "../../../../../shared/providers/crm/hubspot/v3/domain/entities/contact_hubspot_v3.entity";
declare class ContactService {
    private _contactHubspotDatasource;
    create(contact: ContactHubspotV3Entity): Promise<any>;
    getContactByEmail(value: string): Promise<any>;
    getContacts(): Promise<any>;
    filterBy(property: string, value: string): Promise<any>;
}
export default ContactService;
