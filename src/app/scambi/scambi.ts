import { Component } from '@angular/core';
import {DUMMYCARDS} from '../../DUMMYCARDS';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-scambi',
  imports: [
    FormsModule
  ],
  templateUrl: './scambi.html',
  styleUrl: './scambi.css'
})
export class Scambi {
dummyCards: any[] = DUMMYCARDS;
offeredCards: any[] = DUMMYCARDS;
selectedRequestedCard: any = null;
selectedOfferedCard: any = null;

  updateOfferedCards() {
    if(this.selectedRequestedCard) {
      console.log(this.selectedRequestedCard);
      this.offeredCards = this.dummyCards.filter(card => card.id !== this.selectedRequestedCard.id);
    } else {
      this.offeredCards = [];
    }
  }
}
