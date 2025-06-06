import {Component, HostListener, ViewChild} from '@angular/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    MatMenu,
    MatMenuItem,
    MatMenuTrigger,
    MatIcon,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  @ViewChild(MatMenuTrigger) menuTrigger!: MatMenuTrigger;

  // Chiudi il menu se la finestra è più grande di 768px
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    if (width > 768 && this.menuTrigger?.menuOpen) {
      this.menuTrigger.closeMenu();
    }
  }
}
