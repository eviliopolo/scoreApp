import { Component, OnInit, ViewChild } from '@angular/core';
import { objectLearningMobile, question } from 'src/app/interfaces/interfaces';
import { MicrocontentsService } from 'src/app/services/microcontents.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-objaprendizaje',
  templateUrl: './objaprendizaje.page.html',
  styleUrls: ['./objaprendizaje.page.scss'],
})
export class ObjaprendizajePage implements OnInit {
  @ViewChild(IonSegment, {static: false}) segment: IonSegment;

  data: number;
  objetosaprendizajes: objectLearningMobile[] = [];
  objaprendizaje: objectLearningMobile;
  questions: question[] = [];
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
        this.objetosaprendizajes = resp;    
        
        this.segment.value = this.objetosaprendizajes[0].name;    

        console.log('Resp',this.objetosaprendizajes[0].name);
            this.objaprendizaje = this.objetosaprendizajes[0];
    
            var contenido = this.objetosaprendizajes[0].content;
            var contenido = contenido.replace('<figure class="media"><oembed url=', '<iframe style ="width:100%;min-height:250px;"  src='); 
            var contenido = contenido.replace('</oembed></figure>', 'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'); 
    
            this.objaprendizaje.content = contenido;
    });
   
  }

  cambioCategoria( event ) {
    //objaprendizaje 
    console.log(event.detail.value);
    this.cargarObjetoAprendizaje(event.detail.value);
    

  }

  cargarObjetoAprendizaje( aprendizaje: string ) {
    this.objaprendizaje =this.objetosaprendizajes.filter(x => x.name ==aprendizaje)[0];
    //this.objaprendizaje.content = this.objaprendizaje.content;
    
    var contenido = this.objaprendizaje.content;
    var contenido = contenido.replace('<figure class="media"><oembed url=', '<iframe style ="width:100%;min-height:250px;"  src='); 
    var contenido = contenido.replace('</oembed></figure>', 'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'); 

    this.objaprendizaje.content = contenido;

    //this.objaprendizaje.content ='<iframe width="560" height="315" src="https://www.youtube.com/embed/6kqe2ICmTxc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    console.log('objetoAprendizaje',this.objaprendizaje.content);

    this.microcontentServ.getQuestionByObjectLearning(this.objaprendizaje.id)
    .subscribe(resp => {
        this.questions = resp;     
        console.log('questions', this.questions);                           
    });
    
  }

}
