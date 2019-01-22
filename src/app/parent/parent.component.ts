import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <div [textContent]="text"></div>
    <app-child></app-child>
  `
})
export class ParentComponent {
  text = 'Original text in parent component';
}
