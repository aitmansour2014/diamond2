import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BecomeHostessComponent } from './components/become-hostess/become-hostess.component';
import { BookingComponent } from './components/booking/booking.component';
import { LoginComponent } from './components/login/login.component';
import { AbsencesComponent } from './components/absences/absences.component';

import { FrontTemplateComponent } from './components/front-template/front-template.component';
import { HostesseComponent } from './components/hostesse/hostesse.component';

export const routes: Routes = [
    
    { path: 'home', component: HomeComponent },
    { path: 'becomeHostess', component:  BecomeHostessComponent },
    { path: 'login', component:  LoginComponent },
    { path: 'absence', component:  AbsencesComponent },
    { path: 'booking', component:  BookingComponent },


    {
        path : "admin", component : HostesseComponent, children :[
        // path : "admin", component : AdminTemplateComponent, children :[
            { path: 'home', component: HomeComponent },
            { path: 'becomeHostess', component:  BecomeHostessComponent },
            { path: 'login', component:  LoginComponent },
            { path: 'absence', component:  AbsencesComponent },
            { path: 'booking', component:  BookingComponent },
        ]
      },

      {
          path : "hostess", component : FrontTemplateComponent, children :[
          // path : "admin", component : AdminTemplateComponent, children :[
              { path: 'home', component: HomeComponent },
              { path: 'becomeHostess', component:  BecomeHostessComponent },
              { path: 'login', component:  LoginComponent },
              { path: 'absence', component:  AbsencesComponent },
              { path: 'booking', component:  BookingComponent },
          ]
        }
];
