import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient: HttpClient) { }

  getClientsData(): Observable<any> {
    //Public Api, not that fast my friend.
    return this.httpClient.get('https://retoolapi.dev/m16Ifg/data');
  }
}
