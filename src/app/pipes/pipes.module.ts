import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { NoSanitizePipe } from './no-sanitize.pipe';
import { YoutubePipe } from './youtube.pipe';



@NgModule({
  declarations: [
    ImagenPipe,
    NoSanitizePipe,
    YoutubePipe,
  ],
  exports:[
    ImagenPipe,
    NoSanitizePipe,
    YoutubePipe,
  ],
  imports: [
    CommonModule
  ],
  
})
export class PipesModule { }
