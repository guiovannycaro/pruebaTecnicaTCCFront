import { Component, Inject,OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
import { DatosEnviod } from 'src/app/Models/datosEnviod';
import { DetalleEnvioTemp } from 'src/app/Models/detalle-envio-temp';


@Component({
  selector: 'app-editar-envio',
  templateUrl: './editar-envio.component.html',
  styleUrls: ['./editar-envio.component.css']
})
export class EditarEnvioComponent implements OnInit{

  envForm : FormGroup;

  enviosa : Envio = new Envio();

  datoenviar: DatosEnviod = new DatosEnviod();
  productos: Productos[] = [];
  clientes: Clientes[] = [];
  envios: Envio[] = [];
  detalleenvio:DetalleEnvioTemp[] = [];

  constructor( private _fb:FormBuilder,
    private detenv:DetalleEnvioService,private clien:ClientesService,private prod:ProductosService,private api:EnvioService,private router:Router
    ,@Inject(MAT_DIALOG_DATA) public data: any
  ) {

    this.envForm = this._fb.group({
      env_ID:0,
      env_CLIE_ID:0,
      env_TELEFONO:'',
      env_BOD_ID:0,
      env_FECHA_ENTREGA:'',
      env_FECHA_ENVIO:'',
      env_ORIG_CIU_ID:0,
      env_DEST_CIU_ID:'',
      env_ESTADO:0,
      env_REFERENCIA:0
    })

  }

  ngOnInit(): void {
    this.envForm.patchValue(this.data);
    console.log(this.data);
    this.api.getEnvioById(this.data).subscribe(data=>{
      this.enviosa =data;
      console.log(this.data);
     },error=> console.log(error))

      this.obtenerListaProductos();
      this.obtenerListaClientes();
      this.obtenerListaDetalleEnvioTemp();

  }


  private obtenerListaDetalleEnvioTemp(){

    this.detenv.obtenerListaDetalleEnvioById(this.data).subscribe(dato=>{
      this.detalleenvio = dato;
      console.log(dato);
},error=> console.log(error))
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

  eliminarEnvioDetalle(id:String){
    this.detenv.eliminarDetalleEnvioTemp(id).subscribe(data =>{
      console.log(data);
      this.obtenerDetalleEnvio();
    });
  }


  cargProductoTabl(){
    this.datoenviar.datenv_REF =this.data;
    console.log(this.datoenviar);
    this.detenv.registrarDetalleEnvioTemp(this.datoenviar).subscribe(dato=>{
      console.log(dato);
      alert('El registro se Ingreso Correctamente');
      this.obtenerDetalleEnvio();

    },error=>{
      console.log(error)
      alert('El registro no se Ingreso Correctamente');
  })
  }

  private obtenerDetalleEnvio(){
    this.detenv.obtenerListaDetalleEnvioById(this.data).subscribe(dato=>{
      this.detalleenvio = dato;
    })
  }


  guardarEnvio(){
    this.api.editarEnvio(this.enviosa).subscribe(dato=>{
      console.log('DATOS A ENVIAR AL BACK' +this.envios);
      alert('El registro se Ingreso Correctamente');
      window.location.reload();
    },error=>{
     console.log(error);
     alert('El registro no se Ingreso Correctamente');

    })
   }


  onSubmit(){
    console.log(this.envios);
    this.guardarEnvio();
  }

  onSubmitProducto(){
    this.cargProductoTabl();
    console.log(this.productos);

  }


}
