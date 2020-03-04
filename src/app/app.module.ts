import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavmenuComponent } from './singles/navmenu/navmenu.component';
import { HomeComponent } from './singles/home/home.component';
import { LoginComponent } from './singles/login/login.component';
import { RegistrationComponent } from './singles/registration/registration.component';
import { TimeTrackingListComponent } from './singles/time-tracking-list/time-tracking-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    TimeTrackingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
