import { Component, OnInit, DoCheck, ChangeDetectionStrategy, HostBinding } from '@angular/core';
import { delay, map, of, Subject, switchMap, tap, timer } from 'rxjs';

@Component({
  selector: 'app-lv2',
  templateUrl: './lv2.component.html',
  styleUrls: ['./lv2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Lv2Component implements OnInit, DoCheck {

  console = console;
  subject$ = new Subject();

  constructor() {
  }

  ngDoCheck(): void {
    console.log('lv2 DoCheck');
  }

  ngOnInit() {
  }

  reEvaluate() {
    console.log('lv2 reEvaluate');
    this.subject$.next(true);
  }
}
