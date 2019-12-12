import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { MicroContent, MicroContentRoot, MicroContentMobile, ContentManager, objectLearningMobile } from '../interfaces/interfaces';
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


}
