import { Property } from "@hubspot/api-client/lib/codegen/crm/properties";
import PropertyHubspotV3Model from "../../domain/models/property_hubspot_v3.model";
declare class PropertyHubspotV3Mapper {
    static toModel: (property: Property) => PropertyHubspotV3Model;
}
export { PropertyHubspotV3Mapper };
