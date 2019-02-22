import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'swa-register-form',
  templateUrl: './swa-register-form.component.html',
  styleUrls: ['./swa-register-form.component.scss']
})
export class SwaRegisterFormComponent implements OnInit {

  contact: EventContact = new EventContact();

  available: number = this.fetchAvailableFromServer()["available"];

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.contact);
  }

  fetchAvailableFromServer() {
    return { "available": 6 };
  }
}

export class EventContact {
  //School
  nameOfSchool: string;
  streetAndNumber: string;
  postalCode: number;
  city: string;
  schoolClass: string;
  //Teacher
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
  // How many and Remarks
  howMany: number;
  remarks: string;
  
}