import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.page.html',
  styleUrls: ['./banner.page.scss'],
})
export class BannerPage implements OnInit {

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/slides/photos.svg',
      titulo: 'APP SCORE',
      desc: 'Sistema de Conocimiento Orientado a Resultado'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      titulo: 'APP SCORE 2',
      desc: 'Sistema de Conocimiento Orientado a Resultado 2'
    },
    {
      img: '/assets/slides/calendar.svg',
      titulo: 'APP SCORE 3',
      desc: 'Sistema de Conocimiento Orientado a Resultado 3'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      titulo: 'APP SCORE 4',
      desc: 'Sistema de Conocimiento Orientado a Resultado 4'
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
