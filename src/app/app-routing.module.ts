import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layout/admin/admin.component';
import {AuthComponent} from './layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full'
      },
      {
        path: 'authentication',
        loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard-default/dashboard-default.module').then(m => m.DashboardDefaultModule)
      },
      {
        path: 'access-control',
        loadChildren: () => import('./pages/access-control/access-control.module').then(m => m.AccessControlModule)
      },
      {
        path: 'helpdesk',
        loadChildren: () => import('./pages/helpdesk/helpdesk.module').then(m => m.HelpdeskModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule)
      },
      {
        path: 'society',
        loadChildren: () => import('./pages/manage-society/manage-society.module').then(m => m.ManageSocietyModule)
      },
      {
        path: 'ledgers',
        loadChildren: () => import('./pages/master/master.module').then(m => m.MasterModule)
      },
      {
        path: 'billing_heads',
        loadChildren: () => import('./pages/billing/billing.module').then(m => m.BillingModule)
      },
      {
        path: 'reports',
        loadChildren: () => import('./pages/reports/reports.module').then(m => m.ReportsModule)
      },
      {
        path: 'transaction',
        loadChildren: () => import('./pages/transactions/transactions.module').then(m => m.TransactionsModule)
      },
      {
        path: 'vendors',
        loadChildren: () => import('./pages/vendors/vendors.module').then(m => m.VendorsModule)
      },
      {
        path: 'residents',
        loadChildren: () => import('./pages/residents/residents.module').then(m => m.ResidentsModule)
      },
      {
        path: 'import',
        loadChildren: () => import('./pages/import/import.module').then(m => m.ImportModule)
      },
      {
        path: 'calender',
        loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule)
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
