import { Pipe, PipeTransform, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'noSanitize', pure: false
})
export class NoSanitizePipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {
  }

 transform(html: string): SafeHtml {
    //return this.domSanitizer.bypassSecurityTrustStyle(html);
    ///html ='<Div class="media"><div url="https://www.youtube.com/watch?v=WBPrnItLhXo"></div></div><p>&nbsp;</p><p>Hola ......&nbsp;</p><p>&nbsp;</p><p>&nbsp;</p><p>......</p>';
    return this.domSanitizer.sanitize(SecurityContext.HTML,this.domSanitizer.bypassSecurityTrustHtml(html));
 }

}



