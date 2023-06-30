import { SimplePublicObject } from "@hubspot/api-client/lib/codegen/crm/deals";
declare class DealHubspotV3Mapper {
    static toPersistence: (deal: any) => SimplePublicObject;
    static toDTO(deal: SimplePublicObject): any;
}
export default DealHubspotV3Mapper;
