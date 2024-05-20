import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Clientes } from 'src/app/Models/clientes';
import { ClientesService } from 'src/app/Servicios/clientes.service';

@Component({
  selector: 'app-nuevocliente',
  templateUrl: './nuevocliente.component.html',
  styleUrls: ['./nuevocliente.component.css']
})
export class NuevoclienteComponent {

  clientes : Clientes = new Clientes();

  constructor(private api:ClientesService,private router:Router) {}


  ngOnInit(): void {

  }

  guardarClientes(){
    this.api.registrarClientes(this.clientes).subscribe(dato=>{
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
