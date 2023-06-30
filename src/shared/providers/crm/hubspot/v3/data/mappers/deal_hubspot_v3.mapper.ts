
import { SimplePublicObject } from "@hubspot/api-client/lib/codegen/crm/deals";
// import DealHubspotV3Entity from "../../domain/entities/deal_hubspot_v3.entity";
// import { logger } from "../../../../../../shared/utils/middlewares/logger.middlerware";

class DealHubspotV3Mapper {

  static toPersistence = (deal: any): SimplePublicObject => {

    const simplePublicDeal:SimplePublicObject = new SimplePublicObject();

    Object.assign(simplePublicDeal, {
                      id: deal.id || "", 
                      createdAt: new Date(),
                      updatedAt: new Date() 
                    });

    Object.assign(simplePublicDeal, { properties: {} });    
   
    for( const property in deal){      
      simplePublicDeal.properties[property] = deal[property];
    }   
    
    return simplePublicDeal;
    
  };

  static toDTO(deal: SimplePublicObject ): any {
    return {
      //id: deal.id || "",
      orderId: deal.properties.orden_id || "",
      cvaEntidad: deal.properties.entidad || "",
      cvaEspecialidad: deal.properties.especialidad || "",
      cvaFechaDeCirugia: deal.properties.fecha_de_cirugia || "",
      cvaFechaDePreanestesiologia: deal.properties.fecha_de_preanestesiologia || "",
      cvaFechaDeVigenciaOPS: deal.properties.fecha_de_vigencia_ops || "", //·
      cvaHoraCita: deal.properties.cva_hora_cita || "",
      cvaHoraDePreanestesia: deal.properties.hora_de_preanestesia || "",
      cvaMedico: deal.properties.m_dico || "",
      cvaPlan: deal.properties.plan || "",
      cvaSeguroDeVidaCirugia: deal.properties.cva_seguro_de_vida_cirugia || "", //·
      cvaTipoDeCita: deal.properties.tipo_de_cita || "",
      cvaTipoDeEntidad: deal.properties.tipo_de_entidad || "",
      cvaTurCaja: deal.properties.cva_tur_caja || "", //·
      cvaTurCita: deal.properties.cva_tur_cita || "", //·
      cvaTurTipoDeServicio: deal.properties.cva_tur_tipo_de_servicio || "", //·
      numeroDeAutorizacion: deal.properties.n_mero_de_autorizaci_n || "",
      numeroDeIngreso: deal.properties.n_mero_de_factura || "",
      optAbono: deal.properties.opt_abono || "",
      optFactura: deal.properties.opt_factura || "",
      optFechaDeFactura: deal.properties.opt_fecha_de_factura || "",
      optFechaDeRecibidoDelLaboratorio: deal.properties.opt_fecha_de_recibido_del_laboratorio || "",
      optLaboratorio: deal.properties.opt_laboratorio || "",
      optRazonesDeVentaPerdida: deal.properties.opt_razones_de_venta_perdida || "",
      optSaldo: deal.properties.opt_saldo || "",
      optTipoDescuentoOptica: deal.properties.factura_con_descuento_optica || "",
      optValorDescuentoOptica: deal.properties.optValorDescuentoOptica || "",
      propietarioDelNegocio: deal.properties.propietarioDelNegocio || "",
      sede: deal.properties.sede || "",
      servicio: deal.properties.servicio || "",
      tipoDeNegocio: deal.properties.dealtype || "",
      tipoDeServicio: deal.properties.tipos_de_servicio || "",
      turno: deal.properties.turno || "",//·
      valor: deal.properties.amount || "",
     
    };
  }
}

export default DealHubspotV3Mapper;