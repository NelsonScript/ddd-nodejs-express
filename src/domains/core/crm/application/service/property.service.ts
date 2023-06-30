import PropertyHubspotDatasource from "../../data/datasource/external/property_hubspot.datasource";
import {config} from "../../../../../config/env";

class PropertyService {

  _propertyHubspotDatasource: PropertyHubspotDatasource = new PropertyHubspotDatasource(config.hubspotAccessToken);

  async getProperties(): Promise<any> {
    return await this._propertyHubspotDatasource.read();
  }

  async find(hub:string, property: string): Promise<any> {
    return await this._propertyHubspotDatasource.find({hub:hub, property:property});
  }
}

export default PropertyService;