import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_OPTIONS } from '../configs/header.config';

export interface Catagory {
  name: string;
  description?: string;
}
@Injectable({
  providedIn: 'root',
})
export class CatagoryService {
  catagory: Catagory[] = [];
  constructor(private http: HttpClient) {}

  addCatagory(name: any, description: any) {
    let singlecatagory: Catagory = {
      name,
      description,
    };

    this.http
      .post('http://localhost:3000/catagory', singlecatagory, HTTP_OPTIONS)
      .subscribe((response) => {});
  }
  getCatagories(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/catagory');
  }
}
