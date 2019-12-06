import { Component, OnInit } from '@angular/core';
import { MicrocontentsService } from 'src/app/services/microcontents.service';
import { MicroContentMobile } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-activos',
  templateUrl: './activos.page.html',
  styleUrls: ['./activos.page.scss'],
})
export class ActivosPage implements OnInit {
  microcontenidosActivos: MicroContentMobile[] = [];
  constructor(private microcontentServ : MicrocontentsService) { }

  ngOnInit() {
    this.microcontentServ.getMicroContentActive()
    .subscribe(resp => {
        console.log('Resp',resp);
        this.microcontenidosActivos = resp;
    });
  }

}
