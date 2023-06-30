import ContactHubspotDatasource from "../../data/datasource/external/contact_hubspot.datasource";
import { config } from "../../../../../config/env";
import ContactHubspotV3Entity from "../../../../../shared/providers/crm/hubspot/v3/domain/entities/contact_hubspot_v3.entity";
import { ContactHubspotV3Mapper } from "../../../../../shared/providers/crm/hubspot/v3/data/mappers/contact_hubspot_v3.mapper";

class ContactService {

  private _contactHubspotDatasource: ContactHubspotDatasource = new ContactHubspotDatasource(config.hubspotAccessToken);

  async create(contact: ContactHubspotV3Entity) {    
    return await this._contactHubspotDatasource.create(ContactHubspotV3Mapper.toPersistence(contact));
  }

  async getContactByEmail(value: string): Promise<any>{
    return await this._contactHubspotDatasource.filterBy('email', value);
  }

  async getContacts(): Promise<any> {
    return await this._contactHubspotDatasource.read();
  }

  async filterBy(property: string, value:string): Promise<any>{    
    return await this._contactHubspotDatasource.filterBy(property, value);
  }

}

export default ContactService