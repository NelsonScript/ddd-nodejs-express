class PropertyHubspotV3Model {
  private updatedAt: string;
  private name: string;
  private label: string;    
  private description: string;
  private options: Array<any>;

  constructor(fields:any) {
    const {updatedAt, name, label, description, options} = fields;
    this.updatedAt = updatedAt;
    this.name = name;
    this.label = label;
    this.description = description;
    this.options = options;
  }

}

export default PropertyHubspotV3Model;