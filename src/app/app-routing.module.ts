import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './singles/home/home.component';
import { TimeTrackingListComponent } from './singles/time-tracking-list/time-tracking-list.component';
import { RegistrationComponent } from './singles/registration/registration.component';
import { LoginComponent } from './singles/login/login.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'time-tracking-list', component: TimeTrackingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
