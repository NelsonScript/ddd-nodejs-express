import { CRMRepository } from "../../domain/repositories/crm.repository";

class ContactRepository implements CRMRepository{

  associateWithObject(idPrimary: number, idSecondary: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
  filterBy(property: string, value: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  find(item: any): Promise<any[]> {
    throw new Error("Method not implemented.");
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

export default ContactRepository;