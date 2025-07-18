import { Component } from '@angular/core';
import {Navbar} from '../Shared/navbar/navbar';
import {Footer} from '../Shared/footer/footer';

@Component({
  selector: 'app-homepage',
  imports: [
    Navbar,
    Footer
  ],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage {

}
