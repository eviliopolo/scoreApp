import { Component, OnInit } from '@angular/core';
import { ContentManager } from 'src/app/interfaces/interfaces';
import { MicrocontentsService } from 'src/app/services/microcontents.service';

@Component({
  selector: 'app-gestorcontenido',
  templateUrl: './gestorcontenido.page.html',
  styleUrls: ['./gestorcontenido.page.scss'],
})
export class GestorcontenidoPage implements OnInit {
  gestorcontenidos: ContentManager[] = [];
  constructor(private microcontentServ : MicrocontentsService) { }

  ngOnInit() {
    this.microcontentServ.getcontentmanager()
    .subscribe(resp => {
        console.log('Resp',resp);
        this.gestorcontenidos = resp;
    });
  }

}
