import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TerminoscondicionesPage } from './terminoscondiciones.page';

const routes: Routes = [
  {
    path: '',
    component: TerminoscondicionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TerminoscondicionesPage]
})
export class TerminoscondicionesPageModule {}
