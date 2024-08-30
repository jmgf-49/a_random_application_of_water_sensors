import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { DevicesService } from '../../services/devices.service';
import { Devices } from '../../interfaces/devices';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CreateIconComponent } from '../../utils/create-icon/create-icon.component';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, MatIconModule, MatButtonModule, CreateIconComponent],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent implements OnInit {
  cards = Array(15).fill(0);
  displayedCards: number[] = [];

  devices!: Devices[];

  constructor(private deviceService: DevicesService, private cdr: ChangeDetectorRef) { }
  ngOnInit() {

    let index = 0;
    const intervalId = setInterval(() => {
      this.displayedCards.push(this.cards[index]);
      this.cdr.detectChanges(); // Manually trigger change detection
      index++;
      if (index === this.cards.length) {
        clearInterval(intervalId);
      }
    }, 800 / this.cards.length);


    this.getDevices();
  }

  getDevices(): void {
    this.deviceService.getDevices().subscribe(devices => this.devices = devices);
  }


}

