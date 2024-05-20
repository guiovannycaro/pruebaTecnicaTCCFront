import { Component , OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { EnvioService } from 'src/app/Servicios/envio.service';
import { Envio } from 'src/app/Models/envio';
import { MatDialog } from '@angular/material/dialog';
import { NuevoEnvioComponent } from '../../Vistas/envios/nuevo-envio/nuevo-envio.component';
import { EditarEnvioComponent } from '../../Vistas/envios/editar-envio/editar-envio.component';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.component.html',
  styleUrls: ['./envios.component.css']
})
export class EnviosComponent  implements OnInit{

  envios: Envio[] = [];
  enviosd: Envio = new Envio();

  constructor(private api:EnvioService,private router:Router,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.obtenerEnvios();
  }

  openAddEnvForm(){
    this.dialog.open(NuevoEnvioComponent,{ width: '50%'});
}

openEditEnvForm(data: any){
  this.dialog.open(EditarEnvioComponent,{ data}
  );
}

eliminarEnvio(id:number){
  this.api.eliminarEnvio(id).subscribe(data =>{
    console.log(data);
    this.obtenerEnvios();
  });
 }

  private obtenerEnvios(){
    this.api.obtenerListaEnvios().subscribe(dato=>{
      console.log(dato);
          this.envios = dato;
    })
  }



}
