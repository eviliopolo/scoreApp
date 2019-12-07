import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { MicroContent, MicroContentRoot, MicroContentMobile, ContentManager, objectLearningMobile } from '../interfaces/interfaces';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MicrocontentsService {

  constructor(private http: HttpClient) { }

  getMicroContentInactive (){
    const data ='20951f64-6012-4cbe-ae09-473ac1efad65';
    return this.http.get<MicroContentRoot[]>(`${ URL }/api/score/contentinactive?id=20951f64-6012-4cbe-ae09-473ac1efad65`);
  }

  getMicroContentActive (){
    const data ='20951f64-6012-4cbe-ae09-473ac1efad65';
    return this.http.get<MicroContentMobile[]>(`${ URL }/api/score/microcontentactive?id=20951f64-6012-4cbe-ae09-473ac1efad65`);
  }

  getcontentmanager(){
    const data ='20951f64-6012-4cbe-ae09-473ac1efad65';
    return this.http.get<ContentManager[]>(`${ URL }/api/score/contentmanager?microContentId=72`);
  }

  getObjectLearning(){
    const data ='20951f64-6012-4cbe-ae09-473ac1efad65';
    return this.http.get<objectLearningMobile[]>(`${ URL }/api/score/objectlearning?id=20951f64-6012-4cbe-ae09-473ac1efad65&categoryId=3`);
  }


}
