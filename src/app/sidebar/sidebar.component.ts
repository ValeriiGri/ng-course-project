import {Component,
        ContentChild,
        EventEmitter,
        OnInit,
        Output,
        TemplateRef,
        ViewChild,
        AfterContentInit,
        AfterViewInit} from '@angular/core';
import {MatDrawer} from '@angular/material';

@Component({
  selector: 'course-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // setSidebarEmitter - кастомное событие, поток наверх(в хост-элемент <course-sidebar>), внутри него - MatDrawer,
  @Output()
  public setSidebarEmitter: EventEmitter<MatDrawer> = new EventEmitter<MatDrawer>(true); // если не поставить
                                    // true - будет ошибка в консоли типа "сначала переменная undefined, а потом  ..."

  // найди в шаблоне (view) элемент с #drawer
  @ViewChild('drawer', {static: true})// true - будет выполняться в ngOnInit,
                                      // false - в ngAfterContentInit,ngAfterViewInit
  public drawer: MatDrawer;

  constructor() { }

  public ngOnInit() {
    //console.log('myContentThis', this.myContentThis);
    // -> эмиттим наверх(в хост-элемент <course-sidebar>) MatDrawer
    // -> срабатывает событие setSidebarEmitter и вызывается ф-ция setSidebar
    // -> кладём MatDrawer в переменную drawer
    // -> в хост-элемент course-header засылаем drawer, оттуда в компонент header - d
    // ---------------------------------------------------------------------------------до этого момента всё происходит потому-что в ngOnInit тут
    // и при клике на кнопку ф-ция toggleSidebar() открывает/закрывает MatDrawer
      this.setSidebarEmitter.emit(this.drawer);
  }

}
