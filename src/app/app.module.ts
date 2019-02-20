import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
