import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { NoSanitizePipe } from './no-sanitize.pipe';
import { Imagebase64Pipe } from './imagebase64.pipe';




@NgModule({
  declarations: [
    ImagenPipe,
    NoSanitizePipe,
    Imagebase64Pipe,
  ],
  exports:[
    ImagenPipe,
    NoSanitizePipe,
    Imagebase64Pipe,
  ],
  imports: [
    CommonModule
  ],
  
})
export class PipesModule { }
