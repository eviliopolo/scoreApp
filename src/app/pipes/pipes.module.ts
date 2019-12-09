import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { NoSanitizePipe } from './no-sanitize.pipe';



@NgModule({
  declarations: [
    ImagenPipe,
    NoSanitizePipe
  ],
  exports:[
    ImagenPipe,
    NoSanitizePipe,
  ],
  imports: [
    CommonModule
  ],
  
})
export class PipesModule { }
