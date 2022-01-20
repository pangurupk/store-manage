import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_OPTIONS } from '../configs/header.config';
import { Product } from './add-product.service';
export interface BrandType {
  catagory: string;
  catagoryType: string;
  brand: string;
  name: string;
  description?: string;
}
@Injectable({
  providedIn: 'root',
})
export class BrandTypeService {
  productsList: BrandType[] = [];
  constructor(private http: HttpClient) {}
  addBrandType(
    catagory: string,
    catagoryType: string,
    brand: string,
    name: string,
    description?: string
  ) {
    let singleProduct: BrandType = {
      catagory,
      catagoryType,
      brand,
      name,
      description,
    };
    this.http
      .post('http://localhost:3000/brand-type', singleProduct, HTTP_OPTIONS)
      .subscribe((response) => {});
  }

  getBrandType(
    catagory: string,
    catagoryType: string,
    brand: string
  ): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:3000/brand-type/${catagory}/${catagoryType}/${brand}`,
      HTTP_OPTIONS
    );
  }
}
