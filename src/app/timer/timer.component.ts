import { Component } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `
    <h3>Change detection is triggered at: <span [textContent]="time | date: 'hh:mm:ss:SSS'"></span></h3>
    <button (click)="(0)">Trigger Change Detection</button>
  `
})
export class TimerComponent {
  get time() {
    return Date.now();
  }
}
