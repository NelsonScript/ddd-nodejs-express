import { LabelsBetweenObjectPair, SimplePublicObject, SimplePublicObjectInput } from "@hubspot/api-client/lib/codegen/crm/deals";
import { CRMRepository } from "../../../../../../../../shared/providers/crm/core/domain/repositories/crm.repository";
declare class DealHubspotV3Datasource implements CRMRepository {
    private _hubspot;
    constructor(token: string);
    associateWithObject(dealId: number, contactId: number): Promise<LabelsBetweenObjectPair>;
    filterBy(property: string, value: any): Promise<any>;
    find(item: any): Promise<any[]>;
    findOne(id: any): Promise<any>;
    create(simplePublicObjectInput: SimplePublicObjectInput): Promise<SimplePublicObject>;
    read(): Promise<any>;
    update(): Promise<any>;
    delete(): Promise<any>;
}
export default DealHubspotV3Datasource;
