import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//import { url } from 'inspector';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.page.html',
  styleUrls: ['./banner.page.scss'],
})
export class BannerPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay:true
  };


  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/img/slider1.png',
      titulo: 'APP SCORE',
      desc: 'AppScore'
    },
    {
      img: '/assets/img/slider2.png',
      titulo: 'APP SCORE 2',
      desc: 'AppScore'
    },
    {
      img: '/assets/img/slider3.png',
      titulo: 'APP SCORE 3',
      desc: 'AppScore'
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

}
