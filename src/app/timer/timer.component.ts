import { Component, NgZone } from '@angular/core';

/**
 * Angular DOM vs Real DOM
 * App component View   | DOM
 *  h3                  |   h3
 *  span                |   span
 *  button              |   button
 */

/**
 * span view node creates a binding
 * name: 'textContent'
 * expression: time | date: 'hh:mm:ss:SSS'
 */

/**
 * During change detection Angular reads the value of the component’s property time,
 * applies the date pipe, and compares it to the previous value stored on the view.
 * If it detects a difference, Angular updates the textContent property of the span
 * and the oldValues array.
 */

/**
 * Angular imposed the so-called Unidirectional Data Flow. And this check that runs
 * after change detection and the resulting ExpressionChangedAfterItHasBeenCheckedError
 * error is the enforcement mechanism.
 */

@Component({
  selector: 'app-timer',
  template: `
    <h3>Change detection is triggered at: <span [textContent]="time | date: 'hh:mm:ss:SSS'"></span></h3>
    <button (click)="(0)">Trigger Change Detection</button>
  `
})
export class TimerComponent {
  _time;

  get time() {
    return this._time;
  }

  constructor(private zone: NgZone) {
    this._time = Date.now();

    // All timing events, like setInterval, trigger change detection in Angular
    // * we need a way to run setInterval and not trigger change detection

    // Now we’re constantly updating the time, but we’re doing so asynchronously
    // and outside of the Angular zone.
    // Using NgZone to run some code outside of Angular to avoid triggering
    // change detection is a common optimization technique.
    zone.runOutsideAngular(() => {
      setInterval(() => {
        this._time = Date.now();
      }, 1);
    });
  }
}

// If you want to debug go to core.js and search for "function checkAndUpdateView"
// * view.component holds the current value
// * view.nodes holds the displaying nodes
// * view.oldValues holds the values to be compared
