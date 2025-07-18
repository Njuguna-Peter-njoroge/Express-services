import { Routes } from '@angular/router';
import {Navbar} from './component/Shared/navbar/navbar';
import {Footer} from './component/Shared/footer/footer';
import {Login} from './component/auth/login/login';
import {Register} from './component/auth/register/register';
import {EmailVerification} from './component/auth/email-verification/email-verification';
import {Homepage} from './component/homepage/homepage';

export const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' }, // Default route
  { path: 'homepage', component: Homepage },

  {
    path: 'navbar', component: Navbar,},

  {path:'', component:Register,},
  {path:'footer',component:Footer,},
  {path:'login',component:Login,},
  {path:'register',component:Register,},
  {path:'email_verification',component:EmailVerification,},

];
