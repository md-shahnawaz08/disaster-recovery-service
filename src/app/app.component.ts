import { Component } from '@angular/core';
import { SnapshotService } from './services/snapshot.service';
import Texts from './constants/texts';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  rangeDates: Date[];
  texts = Texts;
  daily: ISnapshot[];
  hourly: ISnapshot[];
  minutely: ISnapshot[];
  manual: ISnapshot[];
  start: number;
  end: number;
  span: number;

  constructor(private snapshotService: SnapshotService) { }

  changeDate() {
    console.log(this.rangeDates);
    const start = this.rangeDates[0];
    const end = this.rangeDates[1];
    if (start && end) {
      this.snapshotService.getSnapshots(start.getTime(), end.getTime()).subscribe((data: ICapture[]) => {
        console.log(data);
        this.start = start.getTime();
        this.end = end.getTime();
        this.span = (this.end - this.start) / (3600 * 24 * 1000);
        _.forEach(data, capture => {
          switch (capture.frequency) {
            case 'daily': {
              this.daily = capture.snapshots;
              break;
            } case 'hourly': {
              this.hourly = capture.snapshots;
              break;
            } case 'minutely': {
              this.minutely = capture.snapshots;
              break;
            } case 'manual': {
              this.manual = capture.snapshots;
              break;
            }
          }
        });
      });
    }
  }
}
