import { Component } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {MatIcon} from '@angular/material/icon';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {MatFormField, MatInputModule, MatLabel} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {DUMMYCARDS} from '../../DUMMYCARDS';
import {Button} from '../shared/button/button';

enum State {
  scambi,
  proposte,
  crea
}

@Component({
  selector: 'app-scambi',
  imports: [
    FormsModule,
    MatIcon,
    MatTabGroup,
    MatTab,
    MatFormField,
    MatSelect,
    MatOption,
    MatLabel,
    MatInputModule,
    Button
  ],
  templateUrl: './scambi.html',
  styleUrl: './scambi.css'
})
export class Scambi {
  status: State = State.scambi;
  protected readonly State = State;
  dummyCards : any[] = DUMMYCARDS;
  selectedRequest: string = '';
  selectedOffer: string = '';
  message: string = '';

  onSubmit() {
  console.log(this.selectedRequest);
  console.log(this.selectedOffer)
    console.log(this.message);
  }
}
