import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'swa-register-page',
  templateUrl: './swa-register-page.component.html',
  styleUrls: ['./swa-register-page.component.scss']
})
export class SwaRegisterPageComponent implements OnInit {

  //Variablen Überschriften und Beschreibung
    headingEvent: string = 'Veranstaltung "Mein Weg zum Energiedetektiv"';
    headingAge: string = 'Für die 4.-7.Jahrgangsstufe';
    description:string = 'Kurze Beschreibung, wenn geraucht. Bavaria ipsum dolor sit amet Freibia heitzdog Biawabn oamai.An anbandeln Wiesn, Resi etza Schneid dei.';

  // Variablen Tag, Datum, Uhrzeit und Ort
    dayOfEvent: string = 'Di';
    dateOfEvent: string = '29.05.18';
    timeOfEvent: string = 'von 13Uhr - 16Uhr';
    placeOfEvent: string = 'Wunschort (optional)';
    
  constructor() { }

  ngOnInit() {
  }

}
