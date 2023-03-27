import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, NgZone, OnInit, ViewChild } from '@angular/core';
import { delay, fromEvent, Subject, timer } from 'rxjs';

@Component({
  selector: 'app-lv3',
  templateUrl: './lv3.component.html',
  styleUrls: ['./lv3.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Lv3Component implements OnInit, DoCheck {

  console = console;
  subject$ = new Subject();
  flag = false;

  source: any;

  constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone) {
  }

  ngDoCheck(): void {
    console.log('lv3 DoCheck');
  }

  ngOnInit() {
    timer(2000).subscribe(() => this.subject$.next(true));

    this.subject$.subscribe((val) => {
      // setTimeout(() => {
      //   this.flag = true;
      // }, 0);
      // this.ngZone.run(() => {
      //   this.flag = true;
      // });
      this.flag = true;
      // this.cdr.detectChanges();
      // this.cdr.markForCheck();
    });
  }

  reEvaluate() {
    console.log('lv3 reEvaluate');
    this.subject$.next(true);
  }

}
