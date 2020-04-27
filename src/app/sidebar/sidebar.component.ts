import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material';

@Component({
  selector: 'course-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // setSidebarEmitter - кастомное событие, поток наверх(в хост-элемент <course-sidebar>), внутри него - MatDrawer,
  @Output()
  public setSidebarEmitter: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>();

  // найди в шаблоне (view) элемент с #drawer
  @ViewChild('drawer', {static: true})// true - будет выполняться в ngOnInit, false - в ngAfter...
  public drawer: MatDrawer;

  constructor() { }

  ngOnInit() {
      this.setSidebarEmitter.emit(this.drawer);
  }

}
