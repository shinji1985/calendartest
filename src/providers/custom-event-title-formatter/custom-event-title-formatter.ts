
import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
import { Injectable } from '@angular/core';

/*
  Generated class for the CustomEventTitleFormatterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CustomEventTitleFormatterProvider extends CalendarEventTitleFormatter {

  dayTooltip(event: CalendarEvent): string {
    return;
  }

}
