import { Component, OnInit } from '@angular/core';
import { MicrocontentsService } from 'src/app/services/microcontents.service';

@Component({
  selector: 'app-mispuntos',
  templateUrl: './mispuntos.page.html',
  styleUrls: ['./mispuntos.page.scss'],
})
export class MispuntosPage implements OnInit {

  misPuntos: number;
  constructor(private microcontentServ : MicrocontentsService) { }

  ngOnInit() {
    this.microcontentServ.getPoints()
    .subscribe(resp => {
        console.log('Resp',resp);
        this.misPuntos = resp;
    });
  }

}
