import { Component, OnInit } from '@angular/core';
import { MicrocontentsService } from 'src/app/services/microcontents.service';
import { MicroContent, MicroContentRoot } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.page.html',
  styleUrls: ['./finalizados.page.scss'],
})
export class FinalizadosPage implements OnInit {
  microcontenidosFinalizados: MicroContentRoot[] = [];

  slideOpts = {
    slidesPerView: 1.3,
    freeMode: true,
  };

  constructor(private microcontentServ : MicrocontentsService) { }

  ngOnInit() {
    this.microcontentServ.getMicroContentInactive()
    .subscribe(resp => {
        console.log('Resp',resp);
        this.microcontenidosFinalizados = resp;
    });
  }

}
