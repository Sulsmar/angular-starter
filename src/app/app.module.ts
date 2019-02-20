import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { SwaHeaderComponent } from './swa-header/swa-header.component';
import { SwaRegisterPageComponent } from './swa-register-page/swa-register-page.component';
import { SwaRegisterFormComponent } from './swa-register-form/swa-register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SwaHeaderComponent,
    SwaRegisterPageComponent,
    SwaRegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
