import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title:string;
  constructor(private usuarioService: AuthenticationService) { }

  ngOnInit() {}

  logout(){
    this.usuarioService.logout();
  }

}
