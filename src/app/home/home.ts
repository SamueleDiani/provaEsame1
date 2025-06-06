import { Component } from '@angular/core';
import {HeroSection} from '../hero-section/hero-section';
import {CardSection} from '../card-section/card-section';
import {Info} from '../info/info';
import {Scambi} from '../scambi/scambi';

@Component({
  selector: 'app-home',
  imports: [
    HeroSection,
    CardSection,
    Info,
    Scambi
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
