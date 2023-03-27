import { Component, OnInit, DoCheck, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lv1',
  templateUrl: './moduleA.component.html',
  styleUrls: ['./moduleA.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentA implements OnInit, DoCheck {

  console = console;
  subject$ = new Subject();

  constructor() { }

  ngDoCheck(): void {
    console.log('lv1 DoCheck');
  }

  ngOnInit() {
  }

  reEvaluate() {
    console.log('lv1 reEvaluate');
    this.subject$.next(true);
  }
}
