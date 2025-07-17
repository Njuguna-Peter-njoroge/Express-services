import { Routes } from '@angular/router';
import {Navbar} from './component/Shared/navbar/navbar';
import {Footer} from './component/Shared/footer/footer';
import {Login} from './component/auth/login/login';
import {Register} from './component/auth/register/register';

export const routes: Routes = [
  {
    path: 'navbar', component: Navbar,},
  {path:'', component:Register,},
  {path:'footer',component:Footer,},
  {path:'login',component:Login,},

];
