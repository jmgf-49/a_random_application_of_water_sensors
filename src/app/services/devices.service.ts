import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Devices } from '../interfaces/devices';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {
  //Public Api, not that fast my friend.
  private apiUrl = 'https://retoolapi.dev/YdEY6P/devices';

  constructor(private http: HttpClient) { }

  getDevices(): Observable<Devices[]> {
    return this.http.get<Devices[]>(this.apiUrl);
  }

  getDevice(id: number): Observable<Devices> {
    return this.http.get<Devices>(`${this.apiUrl}/${id}`);
  }
}