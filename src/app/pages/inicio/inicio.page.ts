import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Componente, countobject } from 'src/app/interfaces/interfaces';
import { MicrocontentsService } from 'src/app/services/microcontents.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  objcountobject: countobject;
  componentes: Observable<Componente[]>;
  
  constructor(private dataService: DataService,
              private microcontentServ : MicrocontentsService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenu();
    this.microcontentServ.getCountObject()
    .subscribe(resp => {
        this.objcountobject = resp;
    });
    


  }

}


