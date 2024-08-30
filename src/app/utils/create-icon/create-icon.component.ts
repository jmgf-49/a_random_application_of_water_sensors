import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-create-icon',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './create-icon.component.html',
  styleUrl: './create-icon.component.scss'
})
export class CreateIconComponent {

}
