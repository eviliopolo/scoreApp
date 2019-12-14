import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'youtube'
})
export class YoutubePipe implements PipeTransform {

constructor(private dom: DomSanitizer){

  }

  transform(value) : SafeHtml {
    //return this.dom.bypassSecurityTrustResourceUrl(value);
    return this.dom.sanitize(SecurityContext.HTML,this.dom.bypassSecurityTrustHtml(value));
  }

}
