import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpdeskComponent } from './helpdesk/helpdesk.component';
import { CreateHelpdeskComponent } from './create-helpdesk/create-helpdesk.component';
import { GetHelpdeskComponent } from './get-helpdesk/get-helpdesk.component';
const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Help Desk',
      status: true
    },
    children: [
      {
        path: '',
        component: HelpdeskComponent,
        data: {
          breadcrumb: ' Helpdesk  ',
          status: true
        },
      }, 
    ]
  },
  {
    path: 'createHelpdesk',
    component: CreateHelpdeskComponent,
    data: {
      breadcrumb: 'Add Helpdesk  ',
      status: true
    },
  }, 
  {
    path: 'getHelpdeskById/:helpdeskId',
    component: GetHelpdeskComponent,
    data: {
      breadcrumb: 'Helpdesk Details ',
      status: true
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpdeskRoutingModule { }
