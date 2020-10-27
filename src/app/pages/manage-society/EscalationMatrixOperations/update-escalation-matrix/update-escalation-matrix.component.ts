import { Component, OnInit } from '@angular/core';
import { EscalationMatrix } from '../../../../interfaces/escalationMatrix';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EscalationMatrixService } from '../../../../services/escalation-matrix.service';

@Component({
  selector: 'app-update-escalation-matrix',
  templateUrl: './update-escalation-matrix.component.html',
  styleUrls: ['./update-escalation-matrix.component.scss']
})
export class UpdateEscalationMatrixComponent implements OnInit {

  escalationMatrix$ : EscalationMatrix = new EscalationMatrix();
  escalationMatrix : EscalationMatrix = new EscalationMatrix();
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
  SubCategory= ["Please-Select","Carpentry","Electrical","House Keeping"];
  Priority=["Please-Select","Any","Low","Medium","High"];
  FirstResponceType=["Minutes","Hour","Days"];
  FirstEscalationType=["Minutes","Hour","Days"];
  SecondEscalationType=["Minutes","Hour","Days"];
  ThirdEscalationType=["Minutes","Hour","Days"];
  
  constructor(private route: ActivatedRoute, private data: EscalationMatrixService,private router: Router,private formBuilder: FormBuilder) {
		this.route.params.subscribe( params => this.escalationMatrix$ = params.escalationMatixId );
  }
newEscalationMatrix(): void {
    this.submitted = false;
    this.escalationMatrix = new EscalationMatrix();
  }
  
  save() {
    debugger;
    this.data.updateEscalationMatrixById(this.escalationMatrix$,this.escalationMatrix)
     .subscribe(data => {
      this.router.navigate(['society/escalation_matrix'])
      alert("Successfully updated")}, error => alert("Unable to update due to some technical error"));
      // if(this.escalationMatrix$=null){
      //   console.log("HIIIII");
      //   this.router.navigate(['helpdesk'])
      //  }else{
      //   console.log("Hellow");
      //  // this.router.navigate(['escalationMatrix'])
      //  }
   this.escalationMatrix = new EscalationMatrix();

  
  }
  ngOnInit() {
    // this.data.showEscalationMatrixtById(this.escalationMatrix$).subscribe(
    //   data => this.escalationMatrix = data
    //   );

    this.data.showEscalationMatrixtById(this.escalationMatrix$).subscribe(data => {
      console.log("****************8", data);
      this.escalationMatrix = data;
      if(this.escalationMatrix.firstResponceType == 'Minutes'){
        this.isTime = false;
        this.isDay = false;

      }else if(this.escalationMatrix.firstResponceType == 'Hour'){
        this.isTime = false;
        this.isDay = false;
      }
      else if(this.escalationMatrix.firstResponceType == 'Days'){
        this.isTime = true;
        this.isDay = true;
      }
      if(this.escalationMatrix.firstEscalationType == 'Minutes'){
        this.isTime1 = false;
        this.isDay1 = false;
      }
      else if(this.escalationMatrix.firstEscalationType == 'Hour'){
        this.isTime1 = false;
        this.isDay1 = false;
      }
      else if(this.escalationMatrix.firstEscalationType == 'Days'){
        this.isTime1 = true;
        this.isDay1 = true;
      }
      if(this.escalationMatrix.secondEscalationType == 'Minutes'){
        this.isTime2 = false;
        this.isDay2 = false;
      }
      else if(this.escalationMatrix.secondEscalationType == 'Hour'){
        this.isTime2 = false;
        this.isDay2 = false;
      }
      else if(this.escalationMatrix.secondEscalationType == 'Days'){
        this.isTime2 = true;
        this.isDay2 = true;
      }
      if(this.escalationMatrix.thirdEscalationType == 'Minutes'){
        this.isTime3 = false;
        this.isDay3 = false;
      }
      else if(this.escalationMatrix.thirdEscalationType == 'Hour'){
        this.isTime3 = false;
        this.isDay3 = false;
      }
      else if(this.escalationMatrix.thirdEscalationType == 'Days'){
        this.isTime3 = true;
        this.isDay3 = true;
      }


      
    }, error => {
      console.log("################", error);



    });

	console.log(this.data);
  console.log(this.escalationMatrix);
  
  
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

thirdEscalationType : ['', Validators.required],
thirdEscalationTime: ['', Validators.required],
thirdEscalationName : ['', Validators.required],
thirdEscalationEmail: ['', Validators.required],
thirdEscalationMobile : ['', Validators.required]

  
});
  }
  get f() { return this.registerForm.controls; }
  onSubmit() {
    debugger;
    
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    
    this.save();
  }
  myFunction(){
   
    this.router.navigate(['society/escalation_matrix'])
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
 
 



}
