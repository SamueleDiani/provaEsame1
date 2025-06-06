import { Component } from '@angular/core';
import {DUMMYCARDS} from '../../DUMMYCARDS';
import {Button} from '../shared/button/button';

@Component({
  selector: 'app-card-section',
  imports: [
    Button
  ],
  templateUrl: './card-section.html',
  styleUrl: './card-section.css'
})
export class CardSection {
dummyCards : any[] = DUMMYCARDS;
}
