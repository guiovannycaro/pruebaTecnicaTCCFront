import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable , throwError} from 'rxjs';
import { map } from 'rxjs/operators';
import { Bodega } from '../Models/bodega';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {

  private BaseUrl = "http://localhost:8080/tcc/getion/";

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  obtenerListaBodega():Observable<Bodega[]>{

    let direccion = this.BaseUrl + "CrudBodega/ListarBodegas";
    let response = this.http.get<Bodega[]>(direccion,this.httpOptions);
    return response;
  }


  registrarBodega(productos:Bodega):Observable<any>{

    let direccion = this.BaseUrl + "CrudBodega/crearBodega";
    let response = this.http.post<any>(direccion,productos,this.httpOptions);
    return response;
  }

  getBodegaById(id:number): Observable<any>{

    let direccion = this.BaseUrl + "CrudBodega/buscarBodegaById?id="+id;
    let response = this.http.get<any>(direccion);
    console.log(response);
    return response;
 }

 editarBodega(productos:Bodega):Observable<any>{
  let direccion = this.BaseUrl + "CrudBodega/editarBodega";
  let response = this.http.post<any>(direccion,productos);
  console.log(response);
  return response;
}

eliminarBodega(id:number):Observable<any>{

  let direccion = this.BaseUrl + "CrudBodega/eliminarBodega?id="+id;
  let response = this.http.get<any>(direccion);
  console.log(response);
  return response;
}

}
