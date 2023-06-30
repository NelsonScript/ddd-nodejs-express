
//import ContactMapper from "../../adapters/contact_hubspot.mapper";
import { LabelsBetweenObjectPair, SimplePublicObject } from "@hubspot/api-client/lib/codegen/crm/deals";
import { CRMRepository } from "../../../../../../shared/providers/crm/core/domain/repositories/crm.repository";
import DealHubspotV3Datasource from "../../../../../../shared/providers/crm/hubspot/v3/data/datasource/external/deal_hubspot_v3.datasource";
//import { logger } from "express-winston";

class DealHubspotDatasource implements CRMRepository {

  private _dealHubspotV3Datasource: DealHubspotV3Datasource;

  constructor(token: string) {
    this._dealHubspotV3Datasource = new DealHubspotV3Datasource(token);
  }

  find(item: any): Promise<any[]> {
    throw new Error("Method not implemented.");
  }
  
  async findOne(id: any): Promise<any> {
    return await this._dealHubspotV3Datasource.findOne(id);
  }

  async associateWithObject(dealId: number, contactId: number): Promise<LabelsBetweenObjectPair> {
    return await this._dealHubspotV3Datasource.associateWithObject(dealId, contactId);
  };


  async filterBy(property: string, value: string): Promise<any> {
    return await this._dealHubspotV3Datasource.filterBy(property, value);    
    // return await ContactMapper.toJSON(contactRequest[0]);
  }

  async create(deal: SimplePublicObject): Promise<SimplePublicObject> {
    return await this._dealHubspotV3Datasource.create(deal);
  }

  async read(): Promise<any> {
    return await this._dealHubspotV3Datasource.read();
  };

  async update(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };

  async delete(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };

}
export default DealHubspotDatasource;