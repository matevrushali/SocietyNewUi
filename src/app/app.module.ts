import { BrowserModule } from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { BreadcrumbsComponent } from './layout/admin/breadcrumbs/breadcrumbs.component';
import { TitleComponent } from './layout/admin/title/title.component';
import { AuthComponent } from './layout/auth/auth.component';
import {SharedModule} from './shared/shared.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptor } from './helpers/auth-interceptor';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import {MasterModule} from './pages/master/master.module'
import {ReportsModule} from './pages/reports/reports.module'
import {TransactionsModule} from './pages/transactions/transactions.module'
import {VendorsModule} from './pages/vendors/vendors.module'
import {ResidentsModule} from './pages/residents/residents.module'
import {ImportModule} from './pages/import/import.module'
import { CalendarModule } from './pages/calendar/calendar.module';

@NgModule({
  declarations: [
    
    AppComponent,
    AdminComponent,
    BreadcrumbsComponent,
    TitleComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule.forRoot(),
    SharedModule,
    MasterModule,
    ReportsModule,
    TransactionsModule,
    VendorsModule,
    ResidentsModule,
    ImportModule,
    CalendarModule
    
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [CookieService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
},],
  bootstrap: [AppComponent]
})
export class AppModule { }
