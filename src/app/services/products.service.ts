import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class productsService {

  constructor(private _HttpClient: HttpClient) { }
  getCategories():Observable<any>{
   return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/categories");
  }
  getAllProducts():Observable<any>{
   return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/products");
  }
  getAllBrands():Observable<any>{
   return this._HttpClient.get("https://ecommerce.routemisr.com/api/v1/brands");
  }
  getSpecificProducts(id:string |null):Observable<any>{
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  }
  
}
