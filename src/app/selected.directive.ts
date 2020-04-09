import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appSelected]'
})
export class SelectedDirective {

  constructor(private select:ElementRef) { }

  @HostListener("click") onClicks()
  {
   this.textSelect("gold")
  }

  private textSelect(action:string)
  {
     this.select.nativeElement.style.backgroundColor=action;

   }
}
