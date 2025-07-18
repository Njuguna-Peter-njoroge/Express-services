import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './component/Shared/navbar/navbar';
import {Footer} from './component/Shared/footer/footer';
import {Login} from './component/auth/login/login';
import {Register} from './component/auth/register/register';
import {EmailVerification} from './component/auth/email-verification/email-verification';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, Login, Register,EmailVerification],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Frontend';
}
