/**
 * Contact class
 */
interface DealHubspotV3Entity {
  id: string;
  pipeline: string;
  dealstage: string;
  name: string;
  orderId: string;
  cvaEntidad:string;
  cvaEspecialidad: string;
  cvaFechaDeCirugia:string;
  cvaFechaDePreanestesiologia:string;
  cvaFechaDeVigenciaOPS:string; //·
  cvaHoraCita:string;
  cvaHoraDePreanestesia:string;
  cvaMedico:string;
  cvaPlan:string;
  cvaSeguroDeVidaCirugia:string; //·
  cvaTipoDeCita: string;
  cvaTipoDeEntidad:string;
  cvaTurCaja:string; //·
  cvaTurCita:string; //·
  cvaTurTipoDeServicio:string; //·
  numeroDeAutorizacion:string;
  numeroDeIngreso:string;
  optAbono: string;
  optFactura:string;
  optFechaDeFactura:string;
  optFechaDeRecibidoDelLaboratorio:string;
  optLaboratorio:string;
  optRazonesDeVentaPerdida:string;
  optSaldo: string;
  optTipoDescuentoOptica:string;
  optValorDescuentoOptica:string;
  propietarioDelNegocio: string;
  sede: string;
  servicio: string;
  tipoDeNegocio: string;
  tipoDeServicio: string;
  turno: string;//·
  valor: string;

}

export default DealHubspotV3Entity;