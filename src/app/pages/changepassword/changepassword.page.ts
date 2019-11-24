import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  constructor(private usuarioService: AuthenticationService) { }

  currentUser: Usuario = {};

  ngOnInit() {
    this.currentUser = this.usuarioService.getUsuario();
  }

}
