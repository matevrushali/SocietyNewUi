import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor( private cookieService: CookieService, private router:Router) {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with auth access_token if available
        const access_token=this.cookieService.get("access_token");
        if (!access_token && !request.url.includes("oauth/token")){
           this.router.navigate(['authentication']);  
        }else{       
            //if its not login request then send the access_token              
            if(!request.url.includes("oauth/token")) {
                  //const accessToken = JSON.parse(authObject).access_token;
                  request = request.clone({
                      setHeaders: { 
                        Authorization: `Bearer ${access_token}`
                        // 'Content-Type': 'application/json; charset=utf-8'
                      }
                  });
              }         
            /*.do((response) => {
                if (response instanceof HttpResponse) {
                  this.loadingIndicatorService.hideLoader();
                }
              },
              (error) => {
                this.loadingIndicatorService.hideLoader();
              });
             };*/
            return next.handle(request);            
        }   
    }
}