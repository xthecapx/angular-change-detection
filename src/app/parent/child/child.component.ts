import { Component, AfterViewChecked } from '@angular/core';
import { ParentComponent } from '../parent.component';

@Component({
  selector: 'app-child',
  template: `
    <span>I am child component</span>
  `
})
export class ChildComponent implements AfterViewChecked {
  constructor(private parent: ParentComponent) {}

  ngAfterViewChecked() {
    this.parent.text = 'Updated text in parent component';
  }
}
