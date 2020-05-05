import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material';
import {IProduct, products$} from './mock';
import {Observable} from 'rxjs';

@Component({
  selector: 'course-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title = 'ng-course-project';
  public products$: Observable<IProduct[]> = products$;

  public drawer: MatDrawer;

  public setSidebar(drawer: MatDrawer) {
    this.drawer = drawer;
  }
}
