import ContactModel from "../../domain/model/contact.model";
declare class ContactMapper {
    static toDTO: (contact: ContactModel) => Object;
    static toJSON: (obj: any) => Object;
}
export default ContactMapper;
