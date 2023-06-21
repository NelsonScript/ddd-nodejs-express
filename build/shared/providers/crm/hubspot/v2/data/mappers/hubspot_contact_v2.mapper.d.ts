import ContactHubspotV2Model from "../../../../../../../shared/providers/crm/hubspot/v2/domain/model/contact_hubspot_v2.model";
import ContactHubspotV2DTO from "../../../../../../../shared/providers/crm/hubspot/v2/data/dto/contact_hubspot_v2.dto";
declare class ContactHubspotV2Mapper {
    toModel: (contact: ContactHubspotV2DTO) => any;
    toDTO(contact: ContactHubspotV2Model): ContactHubspotV2DTO;
}
export { ContactHubspotV2Mapper };
