import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SnapshotService {

  constructor(private http: HttpClient) { }

  getSnapshots(start: number, end: number) {
    const url = `https://fast-plains-79447.herokuapp.com/api/snapshots?start=${start}&end=${end}`;
    return this.http.get(url);
  }
}
