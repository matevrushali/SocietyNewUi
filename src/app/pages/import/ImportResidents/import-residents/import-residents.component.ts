import { Component, OnInit } from '@angular/core';
import { UsersFormService } from '../../../../services/users-form.service';
@Component({
  selector: 'app-import-residents',
  templateUrl: './import-residents.component.html',
  styleUrls: ['./import-residents.component.css']
})
export class ImportResidentsComponent implements OnInit {

  constructor(private usersFormService: UsersFormService) { }

  ngOnInit() {
  }
  importResidentsSlots()
  {
    this.usersFormService.importResidentDetails().subscribe(data => alert("Successfully uploaded."), 
       error => alert("Unable to upload."));
  
  }
}

