import { Component } from '@angular/core';
import {Navbar} from '../../Shared/navbar/navbar';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {Footer} from '../../Shared/footer/footer';

@Component({
  selector: 'app-login',
  imports: [
    Navbar,
    ReactiveFormsModule,
    Footer,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
loginForm:FormGroup;
constructor(private fb:FormBuilder, private router:Router){
  this.loginForm = this.fb.group ({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
  });
}
onSubmit(){
  if(this.loginForm.valid) {
    this.router.navigate(['/dashboard']);
  }
}
}
