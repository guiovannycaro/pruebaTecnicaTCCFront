import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { UsuarioService } from 'src/app/Servicios/usuario.service';
import { Usuarios } from 'src/app/Models/usuarios';
import { MatDialog } from '@angular/material/dialog';
import { NuevoUsuarioComponent } from '../../Vistas/usuarios/nuevo-usuario/nuevo-usuario.component';
import { EditarUsuarioComponent } from '../../Vistas/usuarios/editar-usuario/editar-usuario.component';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit{

  usuarios: Usuarios[] = [];
  usuariosd: Usuarios = new Usuarios();
  constructor(private api:UsuarioService,private router:Router,public dialog: MatDialog) {}

ngOnInit(): void {
  this.obtenerUsuarios();
}


openAddUsuForm(){
       this.dialog.open(NuevoUsuarioComponent);
 }

 openEditUsuForm(data: any){
      this.dialog.open(EditarUsuarioComponent,{
        data,}
      );
 }



 eliminarUsuario(id:number){
  this.api.eliminarUsuario(id).subscribe(data =>{
    console.log(data);
    this.obtenerUsuarios();
  });
 }

  private obtenerUsuarios(){
    this.api.obtenerListaUsuarios().subscribe(dato=>{
          this.usuarios = dato;
    })
  }
}
