import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { fromEvent } from 'rxjs';
import { subscribe } from 'diagnostics_channel';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  checkScroll() {
    const header = document.querySelector('body');
    if (window.scrollY > 0) {
      header?.classList.add("sticky-header");
    } else {
      header?.classList.remove('sticky-header');
    }
  }
  ngOnInit() {
    window.addEventListener('scroll',this.checkScroll);
    }   
}
