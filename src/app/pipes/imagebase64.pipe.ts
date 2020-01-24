import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagebase64'
})
export class Imagebase64Pipe implements PipeTransform {

  transform( img: any): any {
    if ( !img ) {
      return './assets/no-image-banner.jpg';
    }

    return "data:image/jpeg;base64,"+ img;;
  }

}
