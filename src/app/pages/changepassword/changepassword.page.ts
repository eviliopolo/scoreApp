import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgForm } from '@angular/forms';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.page.html',
  styleUrls: ['./changepassword.page.scss'],
})
export class ChangepasswordPage implements OnInit {

  constructor(private usuarioService: AuthenticationService,
              private navCtrl: NavController,
              private uiService: UiServiceService) { }

  currentUser: Usuario = {};

  ngOnInit() {
    this.currentUser = this.usuarioService.getUsuario();
  }

  async changePassword (fRegistro: NgForm )
  {
    console.log('Uusuaario',this.currentUser);
    if ( fRegistro.invalid ) { return; }    

    const valido = await this.usuarioService.changePassword( this.currentUser.currentpassword,
                         this.currentUser.password, this.currentUser.password );
    if ( valido ) {
      // navegar al tabs
      this.navCtrl.navigateRoot( '/inicio', { animated: true } );
    } else {
      // mostrar alerta de usuario y contraseña no correctos
      this.uiService.alertaInformativa('No se pudo cambiar su contraseña');
    }

  }

}
