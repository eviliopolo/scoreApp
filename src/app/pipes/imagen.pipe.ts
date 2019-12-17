import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';
const URL = environment.url;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( img: string, size: string = 'w500'): string {
    if ( !img ) {
      return './assets/no-image-banner.jpg';
    }

    //const imgUrl = `${ URL }/${ size }${ img }`;
    const imgUrl = img;

    return imgUrl;
  }

}
