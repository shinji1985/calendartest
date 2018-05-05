import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';


import { CalendarModule, CalendarDateFormatter, CalendarEventTitleFormatter } from 'angular-calendar';

import { CalendarWeekHoursViewModule } from 'angular-calendar-week-hours-view';

import { CustomEventTitleFormatterProvider } from '../../providers/custom-event-title-formatter/custom-event-title-formatter';
import { CustomDateFormatterProvider } from '../../providers/custom-date-formatter/custom-date-formatter';


import localeJa from '@angular/common/locales/ja';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeJa);
@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
    CalendarModule,
    CalendarWeekHoursViewModule,
  ],
  providers: [,
    {
      provide: CalendarDateFormatter,
      useClass: CustomDateFormatterProvider
    },
    {
      provide: CalendarEventTitleFormatter,
      useClass: CustomEventTitleFormatterProvider
    }]
})
export class CalendarPageModule { }
