import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import timeConstants from '../constants/times';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnChanges {
  @Input() start = 0;
  @Input() span = 0;
  @Input() daily: ISnapshot[] = [];
  @Input() hourly: ISnapshot[] = [];
  @Input() minutely: ISnapshot[] = [];
  @Input() manual: ISnapshot[] = [];

  times: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.span && changes.span.currentValue) {
      for (let i = 0; i < changes.span.currentValue; i++) {
        this.times = this.times.concat(timeConstants);
      }
    }
  }

  scrollToLeft(elem: Element) {
    elem.scrollLeft -= 240;
  }

  scrollToRight(elem: Element) {
    elem.scrollLeft += 240;
  }
}
