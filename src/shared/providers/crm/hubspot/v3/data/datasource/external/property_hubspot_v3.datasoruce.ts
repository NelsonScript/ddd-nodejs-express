import * as hubspot from "@hubspot/api-client";
import { CRMRepository } from "../../../../../core/domain/repositories/crm.repository";
import { PropertyHubspotV3Mapper } from "../../mappers/property_hubspot_v3.mapper";


class PropertyHubspotV3Datasource implements CRMRepository {
  
  private _hubspot;
  constructor(token: string) {
    if (!token) {
      throw new Error("⛔️ Se necesita el token que se genera desde las API's de Hubspot. Por favor obtengalas con el administrador del CRM");
    }
    this._hubspot = new hubspot.Client({ accessToken: token });
  }

  associateWithObject(idPrimary: number, idSecondary: number): Promise<any> {
    throw new Error("Method not implemented.");
  }

  filterBy(property: string, value: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async find(item:any): Promise<any> {   
    const archived = false;
    const properties = undefined;

    try {
     const values = await this._hubspot.crm.properties.coreApi.getByName(item.hub, item.property, archived, properties);
     return PropertyHubspotV3Mapper.toModel( values );
      //console.log(JSON.stringify(apiResponse, null, 2));
    } catch (e:any) {     
      const errorMessage = e.message === 'HTTP request failed' ? JSON.stringify(e.response, null, 2) : e;
      throw new Error(e);
    }
  }
  findOne(id: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  create(item: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  update(id: any, item: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  delete(id: any): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
  

}

export default PropertyHubspotV3Datasource;