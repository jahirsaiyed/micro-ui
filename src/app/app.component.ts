import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  unitPrice = 1.7797;
  held = 0;
  currentValue = this.unitPrice * this.held;

 changeHeld(heldUnits:number) {
    return heldUnits * this.unitPrice;
  }
}
