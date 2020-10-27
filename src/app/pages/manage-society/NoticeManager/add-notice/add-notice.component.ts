import { Component, OnInit } from '@angular/core';
import { Occupancy } from '../../../../interfaces/occupancy';
import { Notice } from '../../../../interfaces/notice';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { NoticeManagerService } from '../../../../services/notice-manager.service';
import { Router } from '@angular/router';
import { OccupancyService } from '../../../../services/occupancy.service';
import {MatRadioModule} from '@angular/material/radio';
// import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.scss']
})
export class AddNoticeComponent implements OnInit {

  [x: string]: any;
  limitSelection= false;
  itemList: Array<{item_id:number,item_text:string} > = [];
  selectedItems : any = [];
 // dropdownList = [];
  dropdownSettings : any = {};
  obj :any= null;
  filteredList :any =[] ;
  singleItem :any=null;
  arr:any;
  option: string[] = ['Send All','Selected Flat','Excepted Flat'];
  option1:string[]=['Send Now','Send Later'];
  occupancy$:Occupancy= new Occupancy();
  notice: Notice = new Notice();
  submitted = false; 
  registerForm: FormGroup;
  array:[];
  selectedFlat:boolean=false;
  excludeFlats:boolean=false;
  isScheduleVisible: boolean = false;
  occ:any;
  temp:Occupancy= new Occupancy();
  occid:any;
  occUnit :any;
  ff:any;
  item:Occupancy= new Occupancy() ;
  // item:any;
  // item_id:any;
  // item_text:any;
  // occ:Occupancy= new Occupancy();
  dropdownList = [];
  // selectedItems = [];
  // dropdownSettings = {};
  count:number=0;
 constructor(private noticeManagerService : NoticeManagerService,
              private occService : OccupancyService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {

    this.occService.getOccupancy().subscribe(

      data =>{ console.log("****************8", data); 
      debugger;
       this.occupancy$ = data ;
       this.occ= this.occupancy$;
      for(var ee of this.occ){
        
        console.log("hello : ",ee);
        this.temp= ee;
        this.occid = this.temp.occupancyDetailsId;
        this.occUnit=this.temp.wingBuilding + this.temp.flatNumber;
        // console.log("Var :",this.occ2);
       if(this.occid!=null){
         
        
          let customobj= new Occupancy();
          customobj.occupancyDetailsId=this.occid;
          customobj.wingBuilding=this.occUnit;
          console.log("Var :",this.occid);console.log("Var :",this.occUnit);
          this.itemList.push({ item_id:this.occid, item_text: this.occUnit });
          
          //  var item_id=this.itemList.item_id;
          //  console.log("item_id : ",item_id);
          //  var item_text= this.itemList.item_text;
           
          //  this.item.occupancyDetailsId=item_id;
          //  this.item.flatNumber= item_text;
          // console.log(" item_ID : ",this.item);

        //  var obj= this.item;

        //    this.itemList.push( obj);
           console.log ("itemList  L L  : "+this.itemList);
           this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: this.showFilter  
          };
         }
           
        
        
       
      console.log("itemlist : "+this.itemList);
    
    
      }
      
      }, error =>{console.log("################", error);}
      );
  

 
    this.registerForm = this.formBuilder.group({
      selectedFlat:[null],
      excludeFlats:[null],
     
      noticeSubject: ['', Validators.required],
      isScheduleVisible: [null],
      noticeDescription: ['', Validators.required],
    
  });
  
  this.addCheckboxes();
  }
  onItemSelect(clickedItem: any) {
   
  
    // this.obj= concat(this.obj, item.item_id) ;
      console.log(clickedItem.item_id);  
    //  console.log("obj :"+this.obj);
      this.selectedItems.push(clickedItem.item_id);
      console.log("select : ", this.selectedItems );
      this.amenities.openingDays= this.selectedItems;    
    }
  
  get f() { return this.registerForm.controls; }

  save() {
    
    this.noticeManagerService.createNoticeManager(this.notice)
      .subscribe(data => {
    this.router.navigate(['noticeManager'])
    alert("Successfully Saved")}, error => alert("Unable to Save"));
    this.notice = new Notice();
  }
  onSubmit() {

    //console.log(this.parking.numberOfSocieties);
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    // const selectedOrderIds = this.registerForm.value.orders
    //   .map((v, i) => v ? this.itemList[i].item_id : null)
    //   .filter(v => v !== null);
    // console.log("on submit", selectedOrderIds);
    // console.log("selcted items : ", this.selectedItems);
    
    this.save();
  }
  callDate(option1){
    
    console.log('I am in calldate method')
    if(option1==='Send Later')
    {
      this.isScheduleVisible = true;
     

    }else if(option1==='Send Now')
    {
      this.isScheduleVisible = false;
      this.registerForm.get('isScheduleVisible').clearValidators();
      this.registerForm.get('isScheduleVisible').updateValueAndValidity();
    }

  }
  callFlatBlock(option){
    console.log('I am in callFlatBlock method')
    if(option==='Selected Flat'){
  this.selectedFlat= true;
  this.registerForm.get('excludeFlats').clearValidators();
  this.registerForm.get('excludeFlats').updateValueAndValidity();

}else if(option!=='Selected Flat'){
      this.selectedFlat= false;
    
      
    }
     if(option==='Excepted Flat'){
      this.excludeFlats=true;
      this.registerForm.get('selectedFlat').clearValidators();
     this.registerForm.get('selectedFlat').updateValueAndValidity();
    }else if(option!=='Excepted Flat')
    {
      this.excludeFlats=false;
    }
    if(option==='Send All'){
      this.selectedFlat= false;
      this.excludeFlats=false;
      this.registerForm.get('selectedFlat').clearValidators();
     this.registerForm.get('selectedFlat').updateValueAndValidity();
     this.registerForm.get('excludeFlats').clearValidators();
     this.registerForm.get('excludeFlats').updateValueAndValidity();
   

    }
    
  }
  name = 'Angular 4';
  url = '';
//   onSelectFile(event) {
    
//     if (event.target.files && event.target.files[0]) {

//       var reader = new FileReader();

//       reader.readAsDataURL(event.target.files[0]); // read file as data url

//       reader.onload = (event) => { // called once readAsDataURL is completed
// // this.url = event.target.result;
      
//         }
//     }
//   }
  myFunction(){

    this.router.navigate(['noticeManager'])
    }
    private addCheckboxes() {
      this.itemList.map((o, i) => {
        const control = new FormControl(i === 0); // if first item set to true, else false
        (this.registerForm.controls.orders as FormArray).push(control);
      });
    }
    onItemDeSelect(clickedItem : any){
      debugger;
   //   this.selectedItems = this.selectedItems.filter(item => this.selectedItems.item_id !== clickedItem.item_id);
      console.log("deselect : ",clickedItem, clickedItem.item_id,this.selectedItems );
      // this.filteredList  ;
     
      for( this.singleItem of  this.selectedItems ){
      // for(let var i=0)
      console.log("For Loop <br> singleItem :"+this.singleItem);
      console.log(this.singleItem);
        // if( singleItem != clickedItem){
        //   this.filteredList.push(singleItem);
        //   // console.log("filterlist: "+this.filteredList);
        //   console.log(this.filteredList);
        // } 
        var index = this.singleItem.localeCompare( clickedItem.item_id);
        console.log("localeCompare first :" + index );
        if(index!==0)
        {
         
          this.filteredList.push(this.singleItem);
          console.log(this.filteredList);
        }
        else{
         
          console.log("Not Match");
        }
      }
      console.log("Out side of For Loop")
     this.notice.selectedFlat= this.filteredList;
      console.log("this.notice.selectedFlat :"+this.notice.selectedFlat);
     
      console.log("Deselected Item : "+this.filteredList);
      this.selectedItems = this.filteredList;
      
      this.filteredList = new Notice();
  
    }
  
}

