import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ObjaprendizajePage } from './objaprendizaje.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';


const routes: Routes = [
  {
    path: '',
    component: ObjaprendizajePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ObjaprendizajePage]
})
export class ObjaprendizajePageModule {}
