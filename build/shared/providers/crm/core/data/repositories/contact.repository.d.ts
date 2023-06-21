import { CRMRepository } from "../../domain/repositories/crm.repository";
declare class ContactRepository implements CRMRepository {
    associateWithObject(idPrimary: number, idSecondary: number): Promise<any>;
    filterBy(property: string, value: any): Promise<any>;
    find(item: any): Promise<any[]>;
    findOne(id: any): Promise<any>;
    create(item: any): Promise<boolean>;
    update(id: any, item: any): Promise<boolean>;
    delete(id: any): Promise<boolean>;
}
export default ContactRepository;
