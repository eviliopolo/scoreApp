import { Component, OnInit, ViewChild, ɵConsole } from '@angular/core';
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
  idMicrocontenido: number;
  objetosaprendizajes: objectLearningMobile[] = [];
  objaprendizaje: objectLearningMobile;
  questions: question[] = [];
  disabledButtonPrevious: boolean;
  disabledButtonNext: boolean;
  currentIndex: number;
  constructor(private microcontentServ : MicrocontentsService
              ,private route: ActivatedRoute
              , private router: Router) { 

                this.route.queryParams.subscribe(params => {
                  if (this.router.getCurrentNavigation().extras.state) {
                    this.data = this.router.getCurrentNavigation().extras.state.idCategory;
                    this.idMicrocontenido = this.router.getCurrentNavigation().extras.state.idMicrocontenido;
                  }
                });

  }

  ngOnInit() {
    this.disabledButtonPrevious = true;
    this.disabledButtonNext = true;
    this.microcontentServ.getObjectLearning(this.data)
    .subscribe(resp => {
        this.objetosaprendizajes = resp; 

        console.log('ID MICROCONTENIDO: ', this.idMicrocontenido);
        
        if (this.objetosaprendizajes.length > 0){
          //this.segment.value = this.objetosaprendizajes[0].title;    
          this.currentIndex = 0;
          this.ShowObjetoAprendizaje();
        }
        else
          console.log('No se encontraron objetos de aprendizaje');
        
       
    });
   
  }

  cambioCategoria( event ) {
    //objaprendizaje 
    console.log(event.detail.value);
    this.cargarObjetoAprendizaje(event.detail.value);
    

  }

  Previous(){
    if (this.currentIndex > 0){
      this.currentIndex--;
    }   

    this.ShowObjetoAprendizaje();
  }

  Next(){
    if (this.currentIndex < (this.objetosaprendizajes.length - 1)){
      this.currentIndex++;
    }
   

    this.ShowObjetoAprendizaje();
  }


  ShowObjetoAprendizaje() {
    console.log('current index',this.currentIndex);


    

    
    this.disabledButtonPrevious = (this.currentIndex== 0);

      

    this.disabledButtonNext = (this.currentIndex == (this.objetosaprendizajes.length - 1));
     


    this.objaprendizaje =this.objetosaprendizajes[this.currentIndex];
    
    this.microcontentServ.calculateProgressPercentage(this.data,this.objaprendizaje.id, this.idMicrocontenido); 
    
    var contenido = this.objaprendizaje.content;
    var contenido = contenido.replace('<figure class="media"><oembed url=', '<iframe style ="width:100%;min-height:250px;"  src='); 
    var contenido = contenido.replace('</oembed></figure>', 'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'); 

    this.objaprendizaje.content = contenido;

    //this.objaprendizaje.content ='<iframe width="560" height="315" src="https://www.youtube.com/embed/6kqe2ICmTxc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
    //console.log('objetoAprendizaje',this.objaprendizaje.content);

    this.microcontentServ.getQuestionByObjectLearning(this.objaprendizaje.id)
    .subscribe(resp => {
        this.questions = resp;     
        //console.log('questions', this.questions);                           
    });
    
  }


  cargarObjetoAprendizaje( aprendizaje: string ) {
    this.objaprendizaje =this.objetosaprendizajes.filter(x => x.title ==aprendizaje)[0];
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
