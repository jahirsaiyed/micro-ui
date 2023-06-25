import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lotsize = 0;
  pips = 0;
  sl = 0;
  unitPrice = 1.9495;
  held;
  currentValue = this.unitPrice * this.held;

 changeHeld(heldUnits:number) {
    return heldUnits * this.unitPrice;
  }
  calculate() {
    this.sl = this.pips * this.lotsize /100;
    console.log(this);
  }
}
