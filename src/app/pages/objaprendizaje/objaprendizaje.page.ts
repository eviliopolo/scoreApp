import { Component, OnInit } from '@angular/core';
import { objectLearningMobile } from 'src/app/interfaces/interfaces';
import { MicrocontentsService } from 'src/app/services/microcontents.service';

@Component({
  selector: 'app-objaprendizaje',
  templateUrl: './objaprendizaje.page.html',
  styleUrls: ['./objaprendizaje.page.scss'],
})
export class ObjaprendizajePage implements OnInit {
  objetosaprendizajes: objectLearningMobile[] = [];
  constructor(private microcontentServ : MicrocontentsService) { }

  ngOnInit() {
    this.microcontentServ.getObjectLearning()
    .subscribe(resp => {
        console.log('Resp',resp);
        this.objetosaprendizajes = resp;
    });
  }

}
