import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ClientesService } from 'src/app/Servicios/clientes.service';
import { Clientes } from 'src/app/Models/clientes';
import { MatDialog } from '@angular/material/dialog';
import { NuevoclienteComponent } from '../../Vistas/clientes/nuevocliente/nuevocliente.component';
import { EditarclienteComponent } from '../../Vistas/clientes/editarcliente/editarcliente.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  clientes: Clientes[] = [];
  clientesd: Clientes = new Clientes();
  constructor(private api:ClientesService,private router:Router,public dialog: MatDialog) {}


ngOnInit(): void {
  this.obtenerClientes();
}


openAddClieForm(){
       this.dialog.open(NuevoclienteComponent);
 }

 openEditCliForm(data: any){
      this.dialog.open(EditarclienteComponent,{
        data,}
      );
 }



 eliminarCliente(id:number){
  this.api.eliminarClientes(id).subscribe(data =>{
    console.log(data);
    this.obtenerClientes();
  });
 }

  private obtenerClientes(){
    this.api.obtenerListaClientes().subscribe(dato=>{
          this.clientes = dato;
    })
  }

}
