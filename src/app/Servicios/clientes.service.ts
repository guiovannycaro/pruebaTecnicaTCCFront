import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { Clientes } from '../Models/clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private BaseUrl = "http://localhost:8080/tcc/getion/";

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  obtenerListaClientes():Observable<Clientes[]>{

    let direccion = this.BaseUrl + "CrudClientes/ListarClientes";
    let response = this.http.get<Clientes[]>(direccion,this.httpOptions);
    return response;
  }


  registrarClientes(clientes:Clientes):Observable<any>{

    let direccion = this.BaseUrl + "CrudClientes/crearClientes";
    let response = this.http.post<any>(direccion,clientes,this.httpOptions);
    return response;
  }

  getClientesById(id:number): Observable<any>{

    let direccion = this.BaseUrl + "CrudClientes/buscarClientesById?id="+id;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
 }

 editarClientes(clientes:Clientes):Observable<any>{
  let direccion = this.BaseUrl + "CrudClientes/editarClientes";
  let response = this.http.post<any>(direccion,clientes);
  console.log(response);
  return response;
}

eliminarClientes(id:number):Observable<any>{

  let direccion = this.BaseUrl + "CrudClientes/eliminarClientes?id="+id;
  let response = this.http.get<any>(direccion);
  console.log(response);
  return response;
}

}
