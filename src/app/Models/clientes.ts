export class Clientes {

  cli_ID: number;
  cli_NOMBRES: string;
  cli_TIPODOCUMENTO:  string;
  cli_CEDULA:  string;
  cli_CORREO:  string;
  cli_CELULAR:  string;
  cli_DIRECCION:  string;
  cli_CIUDAD_ID: number;
  cli_ESTADO: number;


  constructor(){
    this.cli_ID = 0;
    this.cli_NOMBRES ="";
    this.cli_TIPODOCUMENTO = "";
    this.cli_CEDULA = "";
    this.cli_CORREO = "";
    this.cli_CELULAR = "";
    this.cli_DIRECCION = "";
    this.cli_CIUDAD_ID = 0;
    this.cli_ESTADO = 0;

  }
}
