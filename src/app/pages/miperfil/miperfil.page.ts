import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/interfaces';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-miperfil',
  templateUrl: './miperfil.page.html',
  styleUrls: ['./miperfil.page.scss'],
})
export class MiperfilPage implements OnInit {
  usuario: Usuario = {};

  constructor( private usuarioService: AuthenticationService,
    private uiService: UiServiceService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.getUsuario();
    console.log(this.usuario);
  }

  async actualizar( fActualizar: NgForm ) {

    if ( fActualizar.invalid ) { return; }

    const actualizado = await this.usuarioService.actualizarUsuario( this.usuario );
    if ( actualizado ) {
      // toast con el mensaje de actualizado
      this.uiService.presentToast( 'Registro actualizado' );
    } else {
      // toast con el error
      this.uiService.presentToast( 'No se pudo actualizar' );
    }

  }


}
