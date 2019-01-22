import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimerComponent } from './timer/timer.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';

@NgModule({
  declarations: [AppComponent, TimerComponent, ParentComponent, ChildComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// https://blog.angularindepth.com/a-gentle-introduction-into-change-detection-in-angular-33f9ffff6f10
// https://blog.angularindepth.com/these-5-articles-will-make-you-an-angular-change-detection-expert-ed530d28930
