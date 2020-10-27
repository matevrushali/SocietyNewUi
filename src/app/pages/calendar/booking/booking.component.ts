import { Component, OnInit } from '@angular/core';
import { UsersFormService } from '../../../services/users-form.service';
import { AmenitiesnewService } from '../../../services/amenitiesnew.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment'
import { AmemitiesNew } from '../../../interfaces/amenitiesNew';
import { BookingNew } from '../../../interfaces/bookingNew';
import { BookingNewService } from '../../../services/booking-new.service';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  booking: BookingNew = new BookingNew();
  option = ['Individual Booking', 'Society Booking'];
  usersForm$: Object;
  allAmenities: any;
 // bookingDetails: any = {};
  aminityDetails: any = {};
  bookingDetails: BookingNew
  //aminityDetails:AmemitiesNew;
  amenitiesData: AmemitiesNew;
  Booking = ['Full day', 'Hourly'];
  amenities$: AmemitiesNew = new AmemitiesNew();
  //optionOther=['Full Day Price']
  showDate: boolean = false;
  member: boolean = false;
  showIt: boolean = true;
  showBoth: boolean = true;
  toDate: boolean = false;
  anyObj: any;
  date1: number;
  showtotal: number;
  dayDiff: number;
  constructor(private bookingservice: BookingNewService, private data: AmenitiesnewService, private data3: UsersFormService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.amenities$ = params.amenitiesId);
  }

  ngOnInit() {
    //this.member=false;
    this.data3.getAllUsersFormDetails().subscribe(
      data3 => this.usersForm$ = data3
    );

    this.data.getAllAmenitiesNew().subscribe(
      data3 => this.allAmenities = data3
    );


  }
  timeInterval:any;
  TotalAmount:any;
  calculateCharges() {
   
  
    var date1 = new Date(this.booking.bookingStartDate);
    var date2 = new Date(this.booking.bookingEndDate);

    var duration = moment.duration(moment(date2).diff(moment(date1)));

    this.dayDiff = duration.asDays();
    this.dayDiff = this.dayDiff == 0 ? 1 : this.dayDiff;

 
//  if( this.booking.bookingStartDate >= this.bookingDetails.bookingStartDate){
// console.log("vvvvaaasssdf")
// alert('Please Dont')
//  }
// if(new Date(this.booking.bookingStartDate)==new Date(this.bookingDetails.bookingStartDate)){
//   alert('Please Dont')
//   console.log("vvvvaaasssdfvvv")
// }


    if (this.booking.bookingType == 'fullday') {
     
      this.toDate=false;
      this.showtotal =this.dayDiff * this.aminityDetails.fullDayPrice;
      this.booking.chargesAmount = this.aminityDetails.fullDayPrice;
      this.booking.totalAmount = this.dayDiff * this.aminityDetails.fullDayPrice;
      this.booking.totalTime = this.dayDiff;

      if(this.booking.bookingStartDate != undefined && this.booking.bookingEndDate != undefined){
        this.timeInterval = 'Total Time for Booking: '+this.dayDiff+' Days';

        this.TotalAmount = this.showtotal
      }
      else{
        this.timeInterval = '';
        this.TotalAmount = '';
      }

     
    }
    if (this.booking.bookingType == 'hourly') {
      this.toDate=true;
      var time1 = this.booking.startTime?this.booking.startTime.toString():'00:00:00';
      var time2 = this.booking.endTime?this.booking.endTime.toString():'00:00:00';
    
      var tiem1Split = time1.split(':');
      var tiem2Split = time2.split(':');

      var startTime = new Date();
      startTime.setHours(parseInt(tiem1Split[0]));
      startTime.setMinutes(parseInt(tiem1Split[1]));

      var endTime = new Date();
      endTime.setHours(parseInt(tiem2Split[0]));
      endTime.setMinutes(parseInt(tiem2Split[1]));

 
      var duration = moment.duration(moment(endTime).diff(moment(startTime)));
      var hours = duration.asHours();
 

       
      this.showtotal = this.dayDiff * hours *  this.aminityDetails.hourlyPrice;
      this.booking.chargesAmount = this.aminityDetails.hourlyPrice;//chargesAmont madhe price jat nahi 
      this.booking.totalAmount = this.showtotal;
      this.booking.totalTime = this.dayDiff * hours; 

      if(this.booking.bookingStartDate != undefined && this.booking.bookingEndDate != undefined && this.booking.startTime != undefined && this.booking.endTime != undefined){
        this.timeInterval = 'Total Time for Booking: ('+this.dayDiff+' Days, '+hours + 'hours)'+ this.dayDiff * hours+' Hours';

        this.TotalAmount = this.showtotal
      }
      else{
        this.timeInterval = '';
        this.TotalAmount = '';
      }
    }
  }

  getBookingSchedule(bokingDetails){
    console.log(bokingDetails);
    this.bookingservice.getBookingSchedule(bokingDetails).subscribe((res)=>{
          console.log(res)
    });
  }


  callCharges(valueId) {
//     if(this.booking.bookingType=="fullday"){
// this.toDate=true;
//     }
//     if(this.booking.bookingType=="hourly"){
//       this.toDate=false;
//           }
    this.data.getAmenitiesNewById(valueId).subscribe(
      data => this.aminityDetails = data
    );

    this.booking.bookingType = '';
this.bookingservice.getBookingsDetailsAmenitiesyId(valueId).subscribe(
  data => this.bookingDetails = data
);

  }


  saveBooking() {
    // if (this.booking.bookingStartDate> this.bookingDetails.bookingStartDate) {
    //   alert('Dont select');
     
    // }
    this.booking.chargesAmount = this.aminityDetails.fullDayPrice;
    this.booking.totalAmount = this.showtotal;
    this.bookingservice.createBooking(this.booking)
      .subscribe(data => {

        alert("Successfully Saved ")
      }, error => alert("Unable to Save Due to Technical Error"));
    this.booking = new BookingNew();
  }
  callForm(value) {

    if (value == "Society Booking") {
      this.member = true;
    }
    if (value == "Individual Booking") {
      this.member = false;
    }

  }
}
