import { ChangeDetectionStrategy, Component, DoCheck } from '@angular/core';
import { skip, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements DoCheck {
  console = console;

  ngDoCheck(): void {
    console.log('AppComponent DoCheck');
  }
  title = 'cd-test';

  subject$ = new Subject();

  reEvaluate() {
    console.log('app component reEvaluate');
    this.subject$.next(true);
  }
}
