import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { MicroContent, MicroContentRoot, MicroContentMobile, ContentManager, objectLearningMobile, question, countobject } from '../interfaces/interfaces';
import { AuthenticationService } from './authentication.service';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MicrocontentsService {
  currentUser: string;
  constructor(private http: HttpClient, private usuarioService: AuthenticationService) {
    this.currentUser = this.usuarioService.getCurrentUser();
   }

  getMicroContentInactive (){        
    return this.http.get<MicroContentRoot[]>(`${ URL }/api/score/contentinactive?id=${ this.currentUser }`);
  }

  getMicroContentActive (){
    return this.http.get<MicroContentMobile[]>(`${ URL }/api/score/microcontentactive?id=${ this.currentUser }`);
  }

  getcontentmanager(idMicroContente: number){
    ///TODO
    //idMicroContente = 72;
    return this.http.get<ContentManager[]>(`${ URL }/api/score/contentmanager?microContentId=${ idMicroContente }`);
  }

  getObjectLearning(idCategory: number){
    ///TODO
    //idCategory = 3;
    return this.http.get<objectLearningMobile[]>(`${ URL }/api/score/objectlearning?id=${ this.currentUser }&categoryId=${ idCategory }`);
  }

  getPoints(){    
    return this.http.get<number>(`${ URL }/api/score/getPoints?user=${ this.currentUser }`);
  }

  getQuestionByObjectLearning(idObjectLearning: number){    
    return this.http.get<question[]>(`${ URL }/api/score/questions?id=${ idObjectLearning }&user=${ this.currentUser }`);    
  }

  async saveQuestionResponse (idquestion:number, idresponse:number){
    return new Promise( resolve => {            
      this.http.get(`${ URL }/api/score/response?question=${ idquestion }&response=${ idresponse }&user=${ this.currentUser }`)
        .subscribe( resp => {
            resolve(true);
        });            
    });  
  }

  getCountObject(){
    this.currentUser = this.usuarioService.getCurrentUser();
    console.log('Token Actual..........',this.currentUser)
    return this.http.get<countobject>(`${ URL }/api/score/countobject?idUser=${ this.currentUser }`);
  }

  


}
