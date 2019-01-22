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

  ngOnChanges() {
    // this.parent.text = '[ngOnChanges] Updated text in parent component';
  }

  ngOnInit() {
    // this.parent.text = '[ngOnInit] Updated text in parent component';
  }

  ngDoCheck() {
    // this.parent.text = '[ngDoCheck] Updated text in parent comiponent';
  }

  ngAfterContentInit() {
    // this.parent.text = '[ngAfterContentInit] Updated text in parent comiponent';
  }

  ngAfterContentChecked() {
    // this.parent.text = '[ngAfterContentChecked] Updated text in parent comiponent';
  }

  ngAfterViewInit() {
    // this.parent.text = '[ngAfterViewInit] Updated text in parent comiponent';
  }

  // Angular calls the ngAfterViewChecked lifecycle hook for the child component,
  // it already checked the binding for the parent App component
  ngAfterViewChecked() {
    // this.parent.text = '[ngAfterViewChecked] Updated text in parent component';
  }

  ngOnDestroy() {}
}

/**
 * function checkAndUpdateView(view, ...) {
 *  ...
 *  // update input bindings on child views (components) & directives,
 *  // call NgOnInit, NgDoCheck and ngOnChanges hooks if needed
 *  Services.updateDirectives(view, CheckType.CheckAndUpdate);
 *
 *  // DOM updates, perform rendering for the current view (component)
 *  Services.updateRenderer(view, CheckType.CheckAndUpdate);
 *
 *  // run change detection on child views (components)
 *   execComponentViewsAction(view, ViewAction.CheckAndUpdate);
 *
 *  // call AfterViewChecked and AfterViewInit hooks
 *  callLifecycleHooksChildrenFirst(…, NodeFlags.AfterViewChecked…);
 *  ...
 * }
 */

/**
 * 1. Child:
 *   - It updates the input bindings
 *   - Calls the OnInit, DoCheck, and OnChanges hooks
 * 2. Angular performs rendering for the current component
 * 3. It calls theAfterViewChecked and AfterViewInit hooks on
 */

/**
 * The OnInit hook is called before the bindings are processed.
 * So even if there’s a change on the text value in the OnInit,
 * it’s still going to be the same during the following check.
 */
