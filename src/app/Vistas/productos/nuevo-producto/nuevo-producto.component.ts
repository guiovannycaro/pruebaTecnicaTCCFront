import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Productos } from 'src/app/Models/productos';
import { ProductosService } from 'src/app/Servicios/productos.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit{


 productos : Productos = new Productos();

  constructor(private api:ProductosService,private router:Router) {}


  ngOnInit(): void {

  }

guardarProductos(){
this.api.registrarProductos(this.productos).subscribe(dato=>{
 console.log(dato);
 alert('El registro se Ingreso Correctamente');
 location.reload();
},error=>{
 console.log(error)
 alert('El registro no se Ingreso Correctamente');
});
}

onSubmit(){
console.log(this.productos);
this.guardarProductos();
}


}
