import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AminitiesComponent } from './aminities/aminities.component';
import { BookingComponent } from './booking/booking.component';
import { MembershipEntityComponent } from './membership-entity/membership-entity.component';
import { MembershipComponent } from './membership/membership.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Vendors',
      status: true
    },
    children: [
      {
        path: 'amenities',
        component: AminitiesComponent
      },
      {
        path: 'amenities_booking',
        component: BookingComponent
      },
      {
        path: 'membership_entity',
        component: MembershipEntityComponent
      },{
        path: 'membership',
        component: MembershipComponent
      }
      
      ,]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
