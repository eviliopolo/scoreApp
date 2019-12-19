import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionComponent } from './question/question.component';
import { FormsModule } from '@angular/forms';
import { PipesModule } from '../pipes/pipes.module';






@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent,
    AvatarSelectorComponent,
    QuestionComponent,
    QuestionsComponent
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    AvatarSelectorComponent,
    QuestionsComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    FormsModule,
    PipesModule
  ]
})
export class ComponentsModule { }
