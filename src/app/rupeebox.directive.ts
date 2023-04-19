import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRupeebox]'
})
export class RupeeboxDirective {

  constructor(private el : ElementRef) { }
  @HostListener('keydown.enter',['$event.target.value']) onEnter(val:string)
  {
    let rupeeValue = parseFloat(val);
    if (!isNaN(rupeeValue)) {
      this.el.nativeElement.value = "₹ " + rupeeValue.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }

  }

}
