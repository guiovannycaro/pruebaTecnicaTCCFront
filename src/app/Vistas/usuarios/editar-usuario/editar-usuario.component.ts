import { Component, Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Usuarios } from 'src/app/Models/usuarios';
import { UsuarioService } from 'src/app/Servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit{
  usuForm : FormGroup;
  usuarios : Usuarios = new Usuarios();

  constructor(
    private _fb:FormBuilder,
    private api:UsuarioService,private router:Router,@Inject(MAT_DIALOG_DATA) public data: any) {
this.usuForm = this._fb.group({
  usu_ID: '',
  usu_NOMBRES: '',
  usu_DIRECCION:  '',
  usu_TELEFONO:  '',
  usu_CORREO:  '',
  usu_NUMDOCUMENTO:  '',
  usu_PASSWORD:  '',
  usu_TDOC_ID: '',
  usu_ROL_ID: '',
  usu_ESTADO:'',

})

  }


  ngOnInit(): void {
     this.usuForm.patchValue(this.data);

     this.api.getusuarioById(this.data).subscribe(data=>{
      this.usuarios =data;
      console.log(this.data);
     },error=> console.log(error))


  }




guardarUsuario(){
this.api.editarUsuario(this.usuarios).subscribe(dato=>{
 console.log(dato);
 alert('El registro se Ingreso Correctamente');
 location.reload();
},error=>{
 console.log(error)
 alert('El registro no se Ingreso Correctamente');
});
}

onSubmit(){
console.log(this.usuarios);
this.guardarUsuario();
}

}
