import PropertyHubspotDatasource from "../../data/datasource/external/property_hubspot.datasource";
declare class PropertyService {
    _propertyHubspotDatasource: PropertyHubspotDatasource;
    getProperties(): Promise<any>;
    find(hub: string, property: string): Promise<any>;
}
export default PropertyService;
