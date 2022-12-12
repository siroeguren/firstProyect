import { Component } from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})

export class CountersComponent 
{
  allowNewCounter = false;
  textoBoton = 'False';
  counterCreationStatus = 'No counter was created yet';
  counterName = "pelayo";
  
  constructor()
  {
    this.timeOutBoton();
  }

  onCounterCreate()
  {
    this.counterCreationStatus = 'A ' + this.counterName + ' counter has been created!';
  }

  timeOutBoton()
  {
    setTimeout(() => 
    {
      this.allowNewCounter =  true;
      this.textoBoton =  'True';
    }, 2000); 
  }

  onUpdateCounterName(event:any)
  {
    this.counterName = event.target.value;
  }
}
