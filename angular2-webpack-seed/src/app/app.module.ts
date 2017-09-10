import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdSidenavModule,
  MdButtonModule,
  MdIconModule,
  MdToolbarModule} from '@angular/material';

import { AppComponent } from './app.component';
import {AppRoutingModule}  from './app-routing.module'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavLinkComponent } from './nav-link/nav-link.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavLinkComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule { }
