import { LabelsBetweenObjectPair } from "@hubspot/api-client/lib/codegen/crm/deals";
declare class DealService {
    private _dealHubspotDatasource;
    create(deal: any): Promise<import("@hubspot/api-client/lib/codegen/crm/deals").SimplePublicObject>;
    associateWithContact(deal: any, contact: any): Promise<LabelsBetweenObjectPair>;
}
export default DealService;
