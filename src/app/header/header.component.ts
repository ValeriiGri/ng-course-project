import {Component, Input, OnInit} from '@angular/core';
import {MatDrawer} from '@angular/material';

@Component({
  selector: 'course-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public t: string;

  @Input()
  public d: MatDrawer;

  public toggleSidebar(): void {
    this.d.toggle();
  }

  constructor() { }

  ngOnInit() {
  }

}
