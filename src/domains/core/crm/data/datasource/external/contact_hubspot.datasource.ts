
//import ContactMapper from "../../adapters/contact_hubspot.mapper";
import { SimplePublicObject } from "@hubspot/api-client/lib/codegen/crm/contacts";
import { CRMRepository } from "../../../../../../shared/providers/crm/core/domain/repositories/crm.repository";
import ContactHubspotV3Datasource from "../../../../../../shared/providers/crm/hubspot/v3/data/datasource/external/contact_hubspot_v3.datasource";
//import { logger } from "express-winston";

class ContactHubspotDatasource implements CRMRepository {
  
  private _contactHubspotV3Datasource:ContactHubspotV3Datasource;

  constructor(token: string) {
    this._contactHubspotV3Datasource = new ContactHubspotV3Datasource(token);
  }

  find(item: any): Promise<any[]> {
    throw new Error("Method not implemented.");
  }
  findOne(id: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  associateWithObject(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };


  async filterBy(property: string, value:string): Promise<any> {      
    const contactRequest = await this._contactHubspotV3Datasource.filterBy(property, value);
    return contactRequest;
    // return await ContactMapper.toJSON(contactRequest[0]);
  }

  async create(contact: SimplePublicObject): Promise<any> {
     return this._contactHubspotV3Datasource
                       .createOrUpdated("n_mero_de_documento", contact.properties.n_mero_de_documento, contact);
  }

  async read(): Promise<any> {   
    return await this._contactHubspotV3Datasource.read();
  };

  async update(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };

  async delete(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };

}
export default ContactHubspotDatasource;