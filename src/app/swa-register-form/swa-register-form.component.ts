import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'swa-register-form',
  templateUrl: './swa-register-form.component.html',
  styleUrls: ['./swa-register-form.component.scss']
})
export class SwaRegisterFormComponent implements OnInit {

  contact: EventContact = new EventContact();

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    console.log(this.contact);
  }
}

export class EventContact {
  firstName: string;
  lastName: string;
  postalcode: number;
}