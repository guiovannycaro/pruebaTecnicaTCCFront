import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { Productos } from '../Models/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private BaseUrl = "http://localhost:8080/tcc/getion/";

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  obtenerListaProductos():Observable<Productos[]>{

    let direccion = this.BaseUrl + "CrudProductos/ListarProductos";
    let response = this.http.get<Productos[]>(direccion,this.httpOptions);
    return response;
  }


  registrarProductos(productos:Productos):Observable<any>{

    let direccion = this.BaseUrl + "CrudProductos/crearProducto";
    let response = this.http.post<any>(direccion,productos,this.httpOptions);
    return response;
  }

  getProductosById(id:number): Observable<any>{

    let direccion = this.BaseUrl + "CrudProductos/buscarProductosById?id="+id;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
 }

 editarProductos(productos:Productos):Observable<any>{
  let direccion = this.BaseUrl + "CrudProductos/editarProductos";
  let response = this.http.post<any>(direccion,productos);
  console.log(response);
  return response;
}

eliminarProducto(id:number):Observable<any>{

  let direccion = this.BaseUrl + "CrudProductos/eliminarProductos?id="+id;
  let response = this.http.get<any>(direccion);
  console.log(response);
  return response;
}







}
