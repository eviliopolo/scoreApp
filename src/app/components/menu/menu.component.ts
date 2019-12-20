import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Componente } from 'src/app/interfaces/interfaces';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;
  constructor( private dataService: DataService,
               private usuarioService: AuthenticationService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenu();
  }
  

  logout(){
    this.usuarioService.logout();
  }




}
