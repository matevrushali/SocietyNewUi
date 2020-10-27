import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { MaterialModules } from '../../helpers/material-modules';
import { MomentModule } from 'ngx-moment';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { AminitiesComponent } from './aminities/aminities.component';
import { BookingComponent } from './booking/booking.component';
import { MembershipEntityComponent } from './membership-entity/membership-entity.component';
import { MembershipComponent } from './membership/membership.component';


@NgModule({
  declarations: [CalendarComponent, AminitiesComponent, BookingComponent, MembershipEntityComponent, MembershipComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FormsModule, ReactiveFormsModule,DataTablesModule,MaterialModules, MomentModule
  ]
})
export class CalendarModule { }
