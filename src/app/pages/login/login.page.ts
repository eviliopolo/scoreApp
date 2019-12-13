import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IonSlides, NavController } from '@ionic/angular';

import { UiServiceService } from 'src/app/services/ui-service.service';
import { Usuario } from '../../interfaces/interfaces';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild('slidePrincipal', {static: true}) slides: IonSlides;

  loginUser = {
    email: 'adminscore@yopmail.com',
    password: 'Pruebas123$'
  };

  registerUser: Usuario = {
    email: '',
    password: '',
    nombre: '',
    apellido: '',
    usuario:'',
    avatar: 'av-1.png',

  };


  constructor( private usuarioService: AuthenticationService,
               private navCtrl: NavController,
               private uiService: UiServiceService ) { }

  ngOnInit() {
    this.slides.lockSwipes( true );
  }

  async login( fLogin: NgForm ) {

    if ( fLogin.invalid ) { return; }

    const valido = await this.usuarioService.login( this.loginUser.email, this.loginUser.password );

    if ( valido ) {
      // navegar al tabs
      this.navCtrl.navigateRoot( '/inicio', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos.');
    }


  }

  async registro( fRegistro: NgForm ) {

    if ( fRegistro.invalid ) { return; }

    const valido = await this.usuarioService.registro( this.registerUser.email,this.registerUser.password,
              this.registerUser.usuario, this.registerUser.nombre, this.registerUser.apellido, this.registerUser.avatar );

    if ( valido ) {
      // navegar al tabs
      this.navCtrl.navigateRoot( '/inicio', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('Ese correo electrónico ya existe.');
    }


  }


  mostrarRegistro() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(0);
    this.slides.lockSwipes(true);
  }

  mostrarLogin() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(1);
    this.slides.lockSwipes(true);
  }
  VerTerminosCondiciones()
  {
    this.navCtrl.navigateRoot( '/terminoscondiciones', { animated: true } );
  }

}
