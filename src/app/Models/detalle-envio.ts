export class DetalleEnvio {

  envd_ID: number;
  envd_PROD_ID: string;
  envd_CANTIDAD:  string;
  envd_PRECIO:  string;
  envd_SUBTOTAL:  string;
  envd_IVA:  string;
  envd_TOTAL:  string;
  envd_DESCUENTO: number;
  envd_ENV_ID: number;


  constructor(){
    this.envd_ID = 0;
    this.envd_PROD_ID ="";
    this.envd_CANTIDAD = "";
    this.envd_PRECIO = "";
    this.envd_SUBTOTAL = "";
    this.envd_IVA = "";
    this.envd_TOTAL = "";
    this.envd_DESCUENTO = 0;
    this.envd_ENV_ID = 0;

  }
}
