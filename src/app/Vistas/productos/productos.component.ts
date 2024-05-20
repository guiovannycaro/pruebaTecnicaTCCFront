import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ProductosService } from 'src/app/Servicios/productos.service';
import { Productos } from 'src/app/Models/productos';
import { MatDialog } from '@angular/material/dialog';
import { NuevoProductoComponent } from '../../Vistas/productos/nuevo-producto/nuevo-producto.component';
import { EditarProductoComponent } from '../../Vistas/productos/editar-producto/editar-producto.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent  implements OnInit{

  productos: Productos[] = [];
  productosd: Productos = new Productos();
  constructor(private api:ProductosService,private router:Router,public dialog: MatDialog) {}

ngOnInit(): void {
  this.obtenerProductos();
}



openAddProForm(){
  this.dialog.open(NuevoProductoComponent);
}

openEditProForm(data: any){
 this.dialog.open(EditarProductoComponent,{
   data,}
 );
}



eliminarProducto(id:number){
this.api.eliminarProducto(id).subscribe(data =>{
console.log(data);
this.obtenerProductos();
});
}

private obtenerProductos(){
this.api.obtenerListaProductos().subscribe(dato=>{
     this.productos = dato;
})
}

}
