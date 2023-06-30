import * as hubspot from "@hubspot/api-client";
import { CollectionResponseWithTotalSimplePublicObjectForwardPaging, 
        Filter, 
        FilterGroup, 
        PublicObjectSearchRequest, 
        SimplePublicObject, 
        SimplePublicObjectInput 
      } from "@hubspot/api-client/lib/codegen/crm/contacts";

import { CRMRepository } from "../../../../../../../../shared/providers/crm/core/domain/repositories/crm.repository";
// import { ContactHubspotV3Mapper } from "../../../../v3/data/mappers/contact_hubspot_v3.mapper";
// import ContactHubspotV3Entity from "../../../../v3/domain/entities/contact_hubspot_v3.entity";

//import { ContactHubspotV3Model } from "../../infra/models/contact_hubspot_v3.model";

class ContactHubspotV3Datasource implements CRMRepository {
  private _hubspot;

  constructor(token: string) {

    if (!token) {
      throw new Error("⛔️ Se necesita el token que se genera desde las API's de Hubspot. Por favor obtengalas con el administrador del CRM");
    }
    this._hubspot = new hubspot.Client({ accessToken: token });
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

  async filterBy(property: string, value: any): Promise<CollectionResponseWithTotalSimplePublicObjectForwardPaging> {

    const publicObjectSearchRequest = new PublicObjectSearchRequest;

    const filterObj = new Filter();
    filterObj.propertyName = property;
    filterObj.value = value;
    filterObj.operator = "EQ";
   
    const filterGroupObj = new FilterGroup();
    filterGroupObj.filters = [filterObj];
    publicObjectSearchRequest.filterGroups = [filterGroupObj];
    return await this._hubspot.crm.contacts.searchApi.doSearch(publicObjectSearchRequest);   
  }

  async create(contact: SimplePublicObject): Promise<SimplePublicObject> {
    return this._hubspot.crm.contacts.basicApi.create(contact);    
  }

  async createOrUpdated(propToFilter: string, valueToFilter: string, contact: SimplePublicObject): Promise<SimplePublicObject> {
    const contactFiltered: CollectionResponseWithTotalSimplePublicObjectForwardPaging = await this.filterBy(propToFilter, valueToFilter);
    const contactFound : any = await contactFiltered.results[0];
    // console.info("®©℗🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔")
    // console.info(contactFound);
    const contactSaved = contactFiltered.total === 0 ? this.create(contact) : this.update(contactFound.id, contact);

    return contactSaved;
  }

  async read(): Promise<any[]> {
    return await this._hubspot.crm.contacts.getAll();   
  };

  async update(id: string, simplePublicObjectInput: SimplePublicObjectInput): Promise<SimplePublicObject> {
    return this._hubspot.crm.contacts.basicApi.update(id, simplePublicObjectInput);    
  };

  async delete(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };

}
export default ContactHubspotV3Datasource;