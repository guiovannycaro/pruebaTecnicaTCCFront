import { Component, Inject,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { Productos } from 'src/app/Models/productos';
import { ProductosService } from 'src/app/Servicios/productos.service';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent  implements OnInit{

  proForm : FormGroup;
  productos : Productos = new Productos();

  constructor(
    private _fb:FormBuilder,
    private api:ProductosService,private router:Router,@Inject(MAT_DIALOG_DATA) public data: any) {
this.proForm = this._fb.group({
  pro_ID: '',
  pro_NOMBRES: '',
  pro_DESCRIPCION:  '',
  pro_OBSERVACION:  '',
  pro_VALOR:  '',
  pro_CANTIDAD:  '',
  pro_ESTADO:  ''
})

  }


  ngOnInit(): void {
     this.proForm.patchValue(this.data);

     this.api.getProductosById(this.data).subscribe(data=>{
      this.productos =data;
      console.log(this.data);
     },error=> console.log(error))


  }




guardarProductos(){
this.api.editarProductos(this.productos).subscribe(dato=>{
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

