import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent 
{
  counterId = 10;
  state = 'off';

  getCounterState()
  {
    return this.state;
  }
}
