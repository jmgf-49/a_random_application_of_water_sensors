import { Component, Input } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatFormField } from '@angular/material/input';

import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterOutlet, RouterLink, RouterLinkActive, 
    MatFormField, MatInputModule ,MatButtonModule, MatCardModule, MatSidenavModule, MatToolbarModule, MatIconModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @Input() title = 'A Random Application of Water Sensors';

toggleSearchBox(searchBox:any) {
  const displayStyle = getComputedStyle(searchBox).display;
  searchBox.style.display = displayStyle === 'none' ? 'inline-flex' : 'none';
}
}
