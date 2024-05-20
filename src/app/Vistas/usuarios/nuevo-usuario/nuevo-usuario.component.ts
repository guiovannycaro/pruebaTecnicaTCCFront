import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuarios } from 'src/app/Models/usuarios';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit{


     usuarios : Usuarios = new Usuarios();

     constructor(private api:UsuarioService,private router:Router) {}


     ngOnInit(): void {

     }

guardarUsuario(){
  this.api.registrarUsuarios(this.usuarios).subscribe(dato=>{
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
