//import ContactMapper from "../../adapters/contact_hubspot.mapper";
import { CRMRepository } from "../../../../../../shared/providers/crm/core/domain/repositories/crm.repository";
import PropertyHubspotV3Datasource from "../../../../../../shared/providers/crm/hubspot/v3/data/datasource/external/property_hubspot_v3.datasoruce";
//import { logger } from "express-winston";

class PropertyHubspotDatasource implements CRMRepository {

  private _propertyHubspotDatasource: PropertyHubspotV3Datasource;

  constructor(token: string) {
    this._propertyHubspotDatasource = new PropertyHubspotV3Datasource(token);
  }
  async find(item:any): Promise<any[]> {
    const propertyRequest = await this._propertyHubspotDatasource.find(item);
    return [propertyRequest];
  }
  findOne(id: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  associateWithObject(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };


  async filterBy(hub: string, property: string): Promise<any> {
    const propertyRequest = await this._propertyHubspotDatasource.filterBy(hub, property);
    return propertyRequest;
    // return await ContactMapper.toJSON(contactRequest[0]);
  }

  async create(contact: any): Promise<any> {
    // return this._hubspot.contacts
    //   .createOrUpdate(contact.email, this._contactMapper.toDTO(contact));
    return new Promise<any>((resolve, reject) => { });
  }

  async read(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
    //return await this._propertyHubspotDatasource.read();
  };

  async update(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };

  async delete(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };

}

export default PropertyHubspotDatasource;