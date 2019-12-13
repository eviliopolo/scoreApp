import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//import { url } from 'inspector';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.page.html',
  styleUrls: ['./banner.page.scss'],
})
export class BannerPage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/img/icono.png',
      titulo: 'APP SCORE',
      desc: 'Sistema de Conocimiento Orientado a Resultado'
    },
    {
      img: '/assets/img/icono.png',
      titulo: 'APP SCORE 2',
      desc: 'Sistema de Conocimiento Orientado a Resultado'
    },
    {
      img: '/assets/img/icono.png',
      titulo: 'APP SCORE 3',
      desc: 'Sistema de Conocimiento Orientado a Resultado'
    },
    {
      img: '/assets/img/icono.png',
      titulo: 'APP SCORE 4',
      desc: 'Sistema de Conocimiento Orientado a Resultado'
    }
  ];

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  mostrarRegistro() {
    this.navCtrl.navigateRoot( '/login', { animated: true } );
  }

  mostrarLogin() {
    this.navCtrl.navigateRoot( '/login', { animated: true } );
  }

  onClick() {
    this.navCtrl.navigateBack('/login');

  }

}
