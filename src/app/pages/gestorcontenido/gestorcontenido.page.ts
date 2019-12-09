import { Component, OnInit } from '@angular/core';
import { ContentManager } from 'src/app/interfaces/interfaces';
import { MicrocontentsService } from 'src/app/services/microcontents.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-gestorcontenido',
  templateUrl: './gestorcontenido.page.html',
  styleUrls: ['./gestorcontenido.page.scss'],
})
export class GestorcontenidoPage implements OnInit {
  data: number;

  gestorcontenidos: ContentManager[] = [];
  constructor(private microcontentServ : MicrocontentsService
              ,private route: ActivatedRoute
              , private router: Router) { 

                this.route.queryParams.subscribe(params => {
                  if (this.router.getCurrentNavigation().extras.state) {
                    this.data = this.router.getCurrentNavigation().extras.state.idGestorContenido;
                  }
                });

  }

  ngOnInit() {
    console.log('Parametro gestor contenido', this.data);
    this.microcontentServ.getcontentmanager(this.data)
    .subscribe(resp => {
        console.log('Resp',resp);
        this.gestorcontenidos = resp;
    });
  }

  verobjetosAprendizaje( id: string){
    console.log(id);

    let navigationExtras: NavigationExtras = {
      state: {
        idCategory: id
      }      
    };
    this.router.navigate(['objaprendizaje'], navigationExtras);    
  }

}
