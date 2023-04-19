import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Directives';
  invalidInput=false;
  onInput(input: string) {
    this.invalidInput = !validateNumberInput(input);
  }
}
function validateNumberInput(input: string): boolean {
  const regex = /^[0-9]*\.?[0-9]*$/;
  return regex.test(input);
}

