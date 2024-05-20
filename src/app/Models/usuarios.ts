export class Usuarios {

  usu_ID: number;
  usu_NOMBRES: string;
  usu_DIRECCION:  string;
  usu_TELEFONO:  string;
  usu_CORREO:  string;
  usu_NUMDOCUMENTO:  string;
  usu_PASSWORD:  string;
  usu_TDOC_ID: number;
  usu_ROL_ID: number;
  usu_ESTADO:number;

  constructor(){
    this.usu_ID = 0;
    this.usu_NOMBRES ="";
    this.usu_DIRECCION = "";
    this.usu_TELEFONO = "";
    this.usu_CORREO = "";
    this.usu_NUMDOCUMENTO = "";
    this.usu_PASSWORD = "";
    this.usu_TDOC_ID = 0;
    this.usu_ROL_ID = 0;
    this.usu_ESTADO = 0;
  }
}
