import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { EmpdetailsComponent } from './empdetails/empdetails.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { HeaderComponent } from './header/header.component';
import { BasicformComponent } from './basicform/basicform.component';
import { WeeatherComponent } from './weeather/weeather.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpdetailsComponent,
    StylebindingComponent,
    HeaderComponent,
    BasicformComponent,
    WeeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
