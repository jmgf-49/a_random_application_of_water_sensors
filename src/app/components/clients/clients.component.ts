import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { HttpClientModule } from '@angular/common/http';
import { ClientsTable } from '../../interfaces/clients';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CreateIconComponent } from '../../utils/create-icon/create-icon.component';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSort, MatSortModule} from '@angular/material/sort';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CreateIconComponent, MatSortModule,
            MatTableModule, HttpClientModule, MatPaginatorModule, MatIconModule, MatButtonModule, CommonModule, MatInputModule, MatFormFieldModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements AfterViewInit {
  
  displayedColumns: string[] = ['id', 'company', 'location', 'createdat', 'editted', 'status', 'Operaciones'];
  public data: Array<ClientsTable> = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource!: MatTableDataSource<ClientsTable>; 

  constructor(private clientsService: ClientsService) { }

  ngAfterViewInit() {
    this.clientsService.getClientsData().subscribe({
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