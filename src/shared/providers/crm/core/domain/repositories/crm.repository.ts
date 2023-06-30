import IRepository from "../../../../../storage/database/domain/repositories/i_repository";

interface CRMRepository extends IRepository<any> {

  associateWithObject(idPrimary: number, idSecondary: number): Promise<any>;

  /**
   * Busca un registro segun la propiedad del CRM y su valor
   * @param property Propiedad del CRM por la que se quiere filtrar 
   * @param value Valor de la propiedad para filtrar
   */
  filterBy(property: string, value: any) : Promise<any>;

}

export { CRMRepository };