import { Component, OnInit, ViewChild } from '@angular/core';
import { objectLearningMobile } from 'src/app/interfaces/interfaces';
import { MicrocontentsService } from 'src/app/services/microcontents.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-objaprendizaje',
  templateUrl: './objaprendizaje.page.html',
  styleUrls: ['./objaprendizaje.page.scss'],
})
export class ObjaprendizajePage implements OnInit {
  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  data: number;
  objetosaprendizajes: objectLearningMobile[] = [];
  objaprendizaje: objectLearningMobile;
  constructor(private microcontentServ : MicrocontentsService
              ,private route: ActivatedRoute
              , private router: Router) { 

                this.route.queryParams.subscribe(params => {
                  if (this.router.getCurrentNavigation().extras.state) {
                    this.data = this.router.getCurrentNavigation().extras.state.idCategory;
                  }
                });

  }

  ngOnInit() {
    
    this.microcontentServ.getObjectLearning(this.data)
    .subscribe(resp => {
        console.log('Resp',resp);
        this.objetosaprendizajes = resp;
        this.segment.value = this.objetosaprendizajes[0].name;
        this.objaprendizaje = this.objetosaprendizajes[0];
        this.objaprendizaje.content ='<iframe width="560" height="315" src="https://www.youtube.com/embed/6kqe2ICmTxc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    });

  }

  cambioCategoria( event ) {
    //objaprendizaje 
    console.log(event.detail.value);
    this.cargarObjetoAprendizaje(event.detail.value);

  }

  cargarObjetoAprendizaje( aprendizaje: string ) {
    this.objaprendizaje =this.objetosaprendizajes.filter(x => x.name ==aprendizaje)[0];
    console.log('objetoAprendizaje',this.objaprendizaje);
    
  }

}
