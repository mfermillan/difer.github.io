import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../Models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  API_URL= "http://localhost:3000/api/productos";
  products: Producto[] | undefined;
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Producto[]>(this.API_URL);
  }
}