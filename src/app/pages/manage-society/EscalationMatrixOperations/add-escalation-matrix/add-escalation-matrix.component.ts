import { Component, OnInit } from '@angular/core';
import { EscalationMatrix } from '../../../../interfaces/escalationMatrix';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { EscalationMatrixService } from '../../../../services/escalation-matrix.service';

@Component({
  selector: 'app-add-escalation-matrix',
  templateUrl: './add-escalation-matrix.component.html',
  styleUrls: ['./add-escalation-matrix.component.scss']
})
export class AddEscalationMatrixComponent implements OnInit {

  escalationMatrix: EscalationMatrix = new EscalationMatrix();
  submitted = false;    
  registerForm: FormGroup;
  isTime: boolean = false;
  isDay: boolean = false;
  isTime1: boolean = false;
  isDay1: boolean = false;
  isTime2: boolean = false;
  isDay2: boolean = false;
  isTime3: boolean = false;
  isDay3: boolean = false;
  Category= ["Apartment","Common Area-Non Tower","Common-Area Tower","Others"];
  SubCategory= ["Carpentry","Electrical","House Keeping"];
  Priority=["Any","Low","Medium","High"];
  FirstResponceType=["Minutes","Hour","Days"];
  // FirstEscalationType=["Minutes","Hour","Days"];
  // SecondEscalationType=["Minutes","Hour","Days"];
  // ThirdEscalationType=["Minutes","Hour","Days"];
    constructor(private escalationMatrixService : EscalationMatrixService,private router: Router,private formBuilder: FormBuilder) { }
  
    ngOnInit() {
      this.registerForm = this.formBuilder.group({
        category: ['', Validators.required],
         subCategory: ['', Validators.required],
      priority: ['', Validators.required],
     firstResponceType: ['', Validators.required],
   firstResponceTime: ['', Validators.required],
    firstResponceName: ['', Validators.required],
       firstResponceEmail: ['', Validators.required],
       firstResponceMobile: ['', Validators.required],   
 firstEscalationType: ['', Validators.required],
  firstEscalationTime: ['', Validators.required],
 	 firstEscalationName: ['', Validators.required],
  firstEscalationEmail : ['', Validators.required],
  firstEscalationMobile : ['', Validators.required],

   secondEscalationType : ['', Validators.required],
 	secondEscalationTime: ['', Validators.required],
 	secondEscalationName : ['', Validators.required],
	 secondEscalationEmail : ['', Validators.required],
 secondEscalationMobile: ['', Validators.required],
	
 thirdEscalationType : [null, Validators.nullValidator],
   thirdEscalationTime: [null, Validators.nullValidator],
 
  thirdEscalationName : [null, Validators.nullValidator],
  thirdEscalationEmail: [null, Validators.nullValidator],
 thirdEscalationMobile : [null, Validators.nullValidator],
	
      
    });
    }
    get f() { return this.registerForm.controls; }
  newEscalationMatrix(): void {
      this.submitted = false;
      this.escalationMatrix = new EscalationMatrix();
    }
    
    save() {
      this.escalationMatrixService.createEscalationMatrixt(this.escalationMatrix)
        .subscribe(data => {
      this.router.navigate(['society/escalation_matrix'])
      alert("Successfully Saved Escalation Matrix")}, error => alert("Unable to Save Due To"));
      this.escalationMatrix = new EscalationMatrix();
    }
    
    onSubmit() {
      this.submitted = true;
      if (this.registerForm.invalid) {
        return;
      }
      this.save();
    }
    myFunction(){
   
      this.router.navigate(['escalationMatrix'])
    }
    onChangeType(value){
      if(value === 'Minutes'){
        this.isTime = false;
        this.isDay = false;

      }
      else if(value === 'Hour'){
        this.isTime = false;
        this.isDay = false;


      }else if(value === 'Days'){
        this.isTime = true;
        this.isDay = true;

      }


    }
    onChangeType1(value){
      if(value === 'Minutes'){
        this.isTime1 = false;
        this.isDay1 = false;

      }
      else if(value === 'Hour'){
        this.isTime1 = false;
        this.isDay1 = false;


      }else if(value === 'Days'){
        this.isTime1 = true;
        this.isDay1 = true;

      }

    }
    onChangeType2(value){
      if(value === 'Minutes'){
        this.isTime2 = false;
        this.isDay2 = false;

      }
      else if(value === 'Hour'){
        this.isTime2 = false;
        this.isDay2 = false;


      }else if(value === 'Days'){
        this.isTime2 = true;
        this.isDay2 = true;

      }

    }
    onChangeType3(value){
    console.log("i am in method")
      if(value === 'Minutes'){
        this.isTime3 = false;
        this.isDay3 = false;

      }
      else if(value === 'Hour'){
        this.isTime3 = false;
        this.isDay3 = false;


      }else if(value === 'Days'){
        this.isTime3 = true;
        this.isDay3 = true;

      }

    }
    rediectToListDetails(urlObj){
      {
        var url = urlObj.split(',');
        if(url.length > 1)
        {
        var urlParam = parseInt(url[1]);
        if(Number.isNaN(urlParam) == true)
        {
          url[1] = eval(url[1]);
        }
        else
        {
          url[1] = urlParam;
        }
      }
        this.router.navigate(url);
      }
    }
  
   


}
