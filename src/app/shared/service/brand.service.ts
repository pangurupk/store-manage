import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_OPTIONS } from '../configs/header.config';

export interface CatagoryBrand {
  catagory: string;
  catagoryType: string;
  name: string;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class BrandService {
  catagoryBrandList: CatagoryBrand[] = [];
  constructor(private http: HttpClient) {}
  addBrand(
    catagory: string,
    catagoryType: string,
    name: string,
    description?: string
  ) {
    let singleBrand: CatagoryBrand = {
      catagory,
      catagoryType,
      name,
      description,
    };
    this.catagoryBrandList.push(singleBrand);
    this.http
      .post('http://localhost:3000/brand', singleBrand, HTTP_OPTIONS)
      .subscribe((response) => {});
  }
  getBrand(catagory: string, catagorytype: string): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:3000/brand/${catagory}/${catagorytype}`,
      HTTP_OPTIONS
    );
  }
}
