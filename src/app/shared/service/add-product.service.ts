import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HTTP_OPTIONS } from '../configs/header.config';
export interface Product {
  catagory: string;
  catagoryType: string;
  brand: string;
  brandType: string;
  name: string;
  description?: string;
}
@Injectable({
  providedIn: 'root',
})
export class AddProductService {
  productsList: Product[] = [];
  constructor(private http: HttpClient) {}
  addproduct(
    catagory: string,
    catagoryType: string,
    brand: string,
    brandType: string,
    name: string,
    description?: string
  ) {
    let singleProduct: Product = {
      catagory,
      catagoryType,
      brand,
      brandType,
      name,
      description,
    };
    this.http
      .post('http://localhost:3000/product', singleProduct, HTTP_OPTIONS)
      .subscribe((response) => {});
  }

  getProduct(
    catagory: string,
    catagoryType: string,
    brand: string,
    brandType: string
  ): Observable<any[]> {
    return this.http.get<any[]>(
      `http://localhost:3000/product/${catagory}/${catagoryType}/${brand}/${brandType}`,
      HTTP_OPTIONS
    );
  }
}
