import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import { MatTableDataSource } from '@angular/material/table';



import { EnvioService } from 'src/app/Servicios/envio.service';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { DetalleEnvioService } from 'src/app/Servicios/detalle-envio.service';
import { ClientesService } from 'src/app/Servicios/clientes.service';

import {  Envio } from 'src/app/Models/envio';
import { DetalleEnvio } from 'src/app/Models/detalle-envio';
import { Productos } from 'src/app/Models/productos';
import { Clientes } from 'src/app/Models/clientes';
import { DatosEnvio } from 'src/app/Models/datosEnvio';

@Component({
  selector: 'app-nuevo-envio',
  templateUrl: './nuevo-envio.component.html',
  styleUrls: ['./nuevo-envio.component.css']
})
export class NuevoEnvioComponent  implements OnInit{

  enviosa : Envio = new Envio();

  datoenviar: DatosEnvio = new DatosEnvio();
  productos: Productos[] = [];
  clientes: Clientes[] = [];
  envios: Envio[] = [];
  detalleenvio:DetalleEnvio[] = [];


  constructor(private detenv:DetalleEnvioService,private clien:ClientesService,private prod:ProductosService,private api:EnvioService,private router:Router) {}

  ngOnInit(): void {
    this.obtenerListaProductos();
    this.obtenerListaClientes();
    this.obtenerDetalleEnvio();
  }

  private obtenerListaProductos(){
    this.prod.obtenerListaProductos().subscribe(dato=>{
          this.productos = dato;
          console.log(this.productos);
    })
  }


  private obtenerListaClientes(){
    this.clien.obtenerListaClientes().subscribe(dato=>{
          this.clientes = dato;
          console.log(this.clientes);
    })
  }

  private obtenerDetalleEnvio(){
    this.detenv.obtenerListaDetalleEnvio().subscribe(dato=>{
          this.detalleenvio = dato;
    })
  }

  cargProductoTablTemp(){
    this.datoenviar.datenv_REF =  this.enviosa.env_REFERENCIA;
    this.detenv.registrarDetalleEnvio(this.datoenviar).subscribe(dato=>{

      console.log(this.datoenviar);
      console.log(dato);
      alert('El registro se Ingreso Correctamente');
      this.obtenerDetalleEnvio();
    },error=>{
      console.log(error)
      alert('El registro no se Ingreso Correctamente');
  })
  }





  eliminarEnvioDetalle(id:number){
    this.detenv.eliminarDetalleEnvio(id).subscribe(data =>{
      console.log(data);
      this.obtenerDetalleEnvio();
    });
   }

   private obtenerEnvios(){
    this.api.obtenerListaEnvios().subscribe(dato=>{
      console.log(dato);
          this.envios = dato;
    })
  }

   guardarEnvio(){
    this.api.registrarEnvio(this.enviosa).subscribe(dato=>{
      console.log('DATOS A ENVIAR AL BACK' +this.envios);
      this.cargDetalleEnvTemp();
      alert('El registro se Ingreso Correctamente');
      window.location.reload();
    },error=>{
     console.log(error);
     alert('El registro no se Ingreso Correctamente');

    })
   }

   cargDetalleEnvTemp(){
    this.api.enviarDatosTemporal(this.enviosa).subscribe(dato=>{
      console.log(dato);
    })
   }



  onSubmit(){
    console.log(this.envios);
    this.guardarEnvio();
  }

  onSubmitProducto(){
    console.log(this.productos);
    this.cargProductoTablTemp();
    this.obtenerDetalleEnvio();
  }

}
