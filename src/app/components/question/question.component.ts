import { Component, OnInit, Input } from '@angular/core';
import { question } from 'src/app/interfaces/interfaces';
import { MicrocontentsService } from 'src/app/services/microcontents.service';
import { UiServiceService } from 'src/app/services/ui-service.service';



@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() question: question;
  @Input() indice:number;
  color: string;
  texto: string;
  disabled: boolean;
  constructor(private microcontentServ : MicrocontentsService,
              private uiService: UiServiceService) { }

  ngOnInit() {
    console.log('Favoritos', this.question );
    this.texto ="Enviar respuesta";
    this.disabled = false;
  }

  async enviarrespuestas ()
  {
    console.log(this.question)

    var responses = this.question.Responses.filter(r => r.selected);
    let actualizado;
    if (responses)
    {
      for(let data of responses) {
        actualizado = await this.microcontentServ.saveQuestionResponse(this.question.Question_Id, data.Response_Id); 
      }
    }

    if ( actualizado ) {
      // toast con el mensaje de actualizado
      this.question.Responses =[];
      this.color ="light";
      this.texto ="Respuesta enviada";
      this.disabled = true;
      this.uiService.presentToast( 'Informacion enviada correctamente' );
    } else {
      // toast con el error
      this.uiService.presentToast( 'No se pudo actualizar' );
    }
    


    
    
  }

}
