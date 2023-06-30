
import { Client, AssociationTypes } from "@hubspot/api-client";
import { LabelsBetweenObjectPair, SimplePublicObject, SimplePublicObjectInput } from "@hubspot/api-client/lib/codegen/crm/deals";
import { CRMRepository } from "../../../../../../../../shared/providers/crm/core/domain/repositories/crm.repository";

//import { Filter, FilterGroup, PublicObjectSearchRequest } from "@hubspot/api-client/lib/codegen/crm/contacts";

class DealHubspotV3Datasource implements CRMRepository {
  private _hubspot;
  //private _dealMapper: DealHubspotV3Mapper = new DealHubspotV3Mapper();

  constructor(token: string) {
    if (!token) {
      throw new Error("⛔️ Se necesita el token que se genera desde las API's de Hubspot. Por favor obtengalas con el administrador del CRM");
    }
    this._hubspot = new Client({ accessToken: token });
  }

  async associateWithObject(dealId: number, contactId: number): Promise<LabelsBetweenObjectPair> {

    return await this._hubspot.crm.deals.associationsApi.create(
      dealId,
      'contacts',
      contactId,
      [
        {
          "associationCategory": "HUBSPOT_DEFINED",
          "associationTypeId": AssociationTypes.dealToContact
          // AssociationTypes contains the most popular HubSpot defined association types
        }
      ]
    );

  };

  filterBy(property: string, value: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  find(item: any): Promise<any[]> {
    throw new Error("Method not implemented.");
  }
  
  async findOne(id: any): Promise<any> {
    return await this._hubspot.crm.deals.basicApi.getById(id);
  }

 

  // async filterBy(prop: string, value: any): Promise<any> {

  //   const publicObjectSearchRequest = new PublicObjectSearchRequest;
  //   const filterObj = new Filter();
  //   filterObj.propertyName = prop;
  //   filterObj.value = value;
  //   filterObj.operator = "EQ";
  //   const filterGroupObj = new FilterGroup();
  //   filterGroupObj.filters = [filterObj];
  //   publicObjectSearchRequest.filterGroups = [filterGroupObj];
  //   const contactResponse = await this._hubspot.crm.contacts.searchApi.doSearch(publicObjectSearchRequest);
  //   return contactResponse;
  //   //return this._contactMapper.toPersistence(contactResponse);
  // }
  async create(simplePublicObjectInput: SimplePublicObjectInput): Promise<SimplePublicObject> {
    return await this._hubspot.crm.deals.basicApi.create(simplePublicObjectInput);
  }

  async read(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };

  async update(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };

  async delete(): Promise<any> {
    return new Promise<any>((resolve, reject) => { });
  };

}
export default DealHubspotV3Datasource