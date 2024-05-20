import { Component, Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Clientes } from 'src/app/Models/clientes';
import { ClientesService } from 'src/app/Servicios/clientes.service';

@Component({
  selector: 'app-editarcliente',
  templateUrl: './editarcliente.component.html',
  styleUrls: ['./editarcliente.component.css']
})
export class EditarclienteComponent  implements OnInit{
  cliForm : FormGroup;
  clientes : Clientes = new Clientes();

  constructor(
    private _fb:FormBuilder,
    private api:ClientesService,private router:Router,@Inject(MAT_DIALOG_DATA) public data: any) {
this.cliForm = this._fb.group({
  cli_ID: '',
  cli_NOMBRES: '',
  cli_TIPODOCUMENTO:  '',
  cli_CEDULA:  '',
  cli_CORREO:  '',
  cli_CELULAR:  '',
  cli_DIRECCION:  '',
  cli_CIUDAD_ID: '',
  cli_ESTADO:'',

})

  }


  ngOnInit(): void {
     this.cliForm.patchValue(this.data);

     this.api.getClientesById(this.data).subscribe(data=>{
      this.clientes =data;
      console.log(this.data);
     },error=> console.log(error))


  }




guardarClientes(){
this.api.editarClientes(this.clientes).subscribe(dato=>{
 console.log(dato);
 alert('El registro se Ingreso Correctamente');
 location.reload();
},error=>{
 console.log(error)
 alert('El registro no se Ingreso Correctamente');
});
}

onSubmit(){
console.log(this.clientes);
this.guardarClientes();
}
}
