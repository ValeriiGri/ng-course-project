import { Component } from '@angular/core';
import {MatDrawer} from '@angular/material';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'ng-course-project';

  public drawer: MatDrawer;

  public setSidebar(drawer: MatDrawer) {
    this.drawer = drawer;
  }
}
