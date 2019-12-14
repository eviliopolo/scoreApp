import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'noSanitize', pure: false
})
export class NoSanitizePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {
  }

 transform(html: string): any  {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
 }

}



