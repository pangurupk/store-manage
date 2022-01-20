import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_OPTIONS } from '../configs/header.config';

export interface CatagoryType {
  catagory: string;
  name: string;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CatagoryTypeService {
  catagoryTypeList: CatagoryType[] = [];
  typeListOfSelectedCatagory: CatagoryType[] = [];
  constructor(private http: HttpClient) {}
  addCatagoryType(catagory: string, name: string, description?: string) {
    let singleCatagoryType: CatagoryType = {
      catagory,
      name,
      description,
    };
    this.catagoryTypeList.push(singleCatagoryType);
    this.http
      .post(
        'http://localhost:3000/catagory-type',
        singleCatagoryType,
        HTTP_OPTIONS
      )
      .subscribe((response) => {});
  }
  getCatagoryTypes(catagory: string): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:3000/catagory-type/${catagory}`,
      HTTP_OPTIONS
    );
  }
}
