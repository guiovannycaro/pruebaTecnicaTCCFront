export class Envio {

  env_ID: number;
  env_CLIE_ID: number;
  env_TELEFONO:  string;
  env_BOD_ID:  number;
  env_FECHA_ENTREGA:  string;
  env_FECHA_ENVIO:  string;
  env_ORIG_CIU_ID:  number;
  env_DEST_CIU_ID: number;
  env_ESTADO: number;
  env_REFERENCIA:number


  constructor(){
    this.env_ID = 0;
    this.env_CLIE_ID =0;
    this.env_TELEFONO = "";
    this.env_BOD_ID = 0;
    this.env_FECHA_ENTREGA = "";
    this.env_FECHA_ENVIO = "";
    this.env_ORIG_CIU_ID = 0;
    this.env_DEST_CIU_ID = 0;
    this.env_ESTADO = 0;
    this.env_REFERENCIA = 0;
  }
}
