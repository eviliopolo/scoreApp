import { Component, OnInit } from '@angular/core';
import { objectLearningMobile } from 'src/app/interfaces/interfaces';
import { MicrocontentsService } from 'src/app/services/microcontents.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-objaprendizaje',
  templateUrl: './objaprendizaje.page.html',
  styleUrls: ['./objaprendizaje.page.scss'],
})
export class ObjaprendizajePage implements OnInit {
  data: number;
  objetosaprendizajes: objectLearningMobile[] = [];
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
    this.microcontentServ.getObjectLearning()
    .subscribe(resp => {
        console.log('Resp',resp);
        this.objetosaprendizajes = resp;
    });
  }

}
