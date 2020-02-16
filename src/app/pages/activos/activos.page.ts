import { Component, OnInit } from '@angular/core';
import { MicrocontentsService } from 'src/app/services/microcontents.service';
import { MicroContentMobile } from 'src/app/interfaces/interfaces';


import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.page.html',
  styleUrls: ['./activos.page.scss'],
})
export class ActivosPage implements OnInit {
  microcontenidosActivos: MicroContentMobile[] = [];
  constructor(private microcontentServ : MicrocontentsService, private router: Router) { }

  ngOnInit() {
    this.microcontentServ.getMicroContentActive()
    .subscribe(resp => {
        console.log('Resp',resp);
        this.microcontenidosActivos = resp;
    });
  }

  vergestorcontenido( id: string){
    console.log(id);

    let navigationExtras: NavigationExtras = {
      state: {
        idGestorContenido: id
      }      
    };
    this.router.navigate(['gestorcontenido'], navigationExtras);    
  }



}
