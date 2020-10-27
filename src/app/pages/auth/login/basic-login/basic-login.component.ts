import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersFormService } from '../../../../services/users-form.service';
import { UsersFormDetails } from '../../../../interfaces/userFormDetails';
import { CookieService } from 'ngx-cookie-service';
import { PrivilegesService } from '../../../../services/privileges.service';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-basic-login',
  templateUrl: './basic-login.component.html',
  styleUrls: ['./basic-login.component.scss']
})
export class BasicLoginComponent implements OnInit {
  submitted = false;
  login$: UsersFormDetails = new UsersFormDetails();
  login: UsersFormDetails = new UsersFormDetails();
  usersFormDetails: UsersFormDetails = new UsersFormDetails();
  loginDetails: UsersFormDetails = new UsersFormDetails()
  expiredDate: Date;
  privilegesList: Object;
  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private data1: UsersFormService, private cookieService: CookieService, private privilegesService: PrivilegesService) {
    this.route.params.subscribe(params => this.usersFormDetails = params.loginDetails);

  }

  ngOnInit() {
    document.querySelector('body').setAttribute('themebg-pattern', 'theme1');
  }
  newLogin(): void {
    this.submitted = false;
    this.loginDetails = new UsersFormDetails();
   
  }
   //Start : nIKHILD login method
   loginUser(){
     debugger;
    this.loginService.obtainAccessToken(this.loginDetails ).subscribe(data =>{ 
     alert("Successfully Login")
    console.log("response of obtainAccessToken() in loginUser() : ", data); this.performPostLoginActions(data) 
},error =>{
    console.log("Error from obtainAccessToken() in loginUser() :", error);
});
}

performPostLoginActions(authObejct){
//save accessToken in cookies for further use
this.saveTokenInCookies(authObejct);
// this code for getting privilge

this.privilegesService.getPrivilegesOfLoggedInUser().subscribe(
    data => {console.log("getPrivilegesOfLoggedInUser response : ", data);
    this.privilegesList = data

    console.log("getprivilegeDetails",this.privilegesList);
    var today = new Date();
    var expiresIn = new Date(today);
    // expiresIn.setMinutes(today.getMinutes()+5)
   expiresIn.setHours(today.getHours()+1)
    this.cookieService.set("privilegeArray",this.privilegesList.toString(),expiresIn );


  },
error =>{
    console.log("Error while getPrivilegesOfLoggedInUser : ", error);
    this.router.navigate(['/dashboard']);
})

// this.router.navigate(['/']);

this.router.navigate(['dashboard'])

}
//save the access token in cookies for time : (mention time here) & navigate to dashboard 
private saveTokenInCookies(authObject){
//var expireDate = new Date().getTime() + (1000 * token.expires_in);
var today = new Date();
var expiresIn = new Date(today);
// expiresIn.setSeconds(today.getSeconds()+5)
// expiresIn.setMinutes(today.getMinutes()+5)
expiresIn.setHours(today.getHours()+1)
this.cookieService.set("access_token", authObject.access_token, expiresIn);
this.cookieService.set("authObject", authObject, expiresIn);

}

onSubmit() {
  this.submitted = true;
  //this.save();
  this.loginUser();

}
}
