import { Directive, ElementRef, HostListener } from '@angular/core';
import { hostname } from 'os';

@Directive({
  selector: '[appChangecase]'
})
export class ChangecaseDirective {

  constructor(private el:ElementRef) { }
  @HostListener('input',['$event.target.value']) onInput(val:string)
  {
    this.el.nativeElement.value=val.toUpperCase();
  }

}
