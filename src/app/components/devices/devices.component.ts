import { AfterViewInit, ViewChild, Component  } from '@angular/core';
import { DevicesService } from '../../services/devices.service';
import { HttpClientModule } from '@angular/common/http';
import { Devices } from '../../interfaces/devices';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { CreateIconComponent } from '../../utils/create-icon/create-icon.component';
import { MatTableModule,MatTableDataSource } from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [MatInputModule,MatTableModule,MatFormFieldModule,MatSortModule,MatPaginatorModule,HttpClientModule, CommonModule, MatGridListModule, MatCardModule, MatIconModule, MatButtonModule, CreateIconComponent],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.scss'
})
export class DevicesComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'serialnumber', 'SIM', 'createdat', 'Operations']
  public data: Array<Devices> = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<Devices>; 

  constructor(private devicesService: DevicesService) { }

  ngAfterViewInit() {
    this.devicesService.getDevices().subscribe({
      next: (data: any) => {
        this.data = data;
        this.dataSource = new MatTableDataSource(this.data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }, 
      error: (err) => console.log(err)
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}