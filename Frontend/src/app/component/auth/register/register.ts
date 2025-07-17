import { Component } from '@angular/core';
import {Navbar} from '../../Shared/navbar/navbar';
import {Footer} from '../../Shared/footer/footer';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    Navbar,
    Footer,
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
registerForm:FormGroup;


constructor(private fb:FormBuilder){
  this.registerForm = this.fb.group ({
    name:['', Validators.required],
    email:['', [Validators.required,Validators.email]],
    password:['', [Validators.required, Validators.minLength(6)]],
    confrimPassword:['', Validators.required],
  });
}
onSubmit(){
  if(this.registerForm.valid) {

  }
}
}
