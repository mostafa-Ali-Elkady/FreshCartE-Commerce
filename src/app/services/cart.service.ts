import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AuthService } from "./auth.service";
AuthService;
@Injectable({
  providedIn: "root",
})
export class CartService {
  //properties********
  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0);
  cartId = new BehaviorSubject('');
  userId = this._AuthService.userId;
  baseUrl: string = `https://ecommerce.routemisr.com/api/v1/`;
  headers: any = {
    token: localStorage.getItem("userToken"),
  };

  //propertites***********

  constructor(
    private _HttpClient: HttpClient,
    private _AuthService: AuthService
  ) {}

  // ngOnInit(): void {
  //   this.getUserCart().subscribe({
  //     next: (response) => {
  //       this.cartNumber.next(response.numOfCartItems);
  //     },
  //   });
  // }

  // Add Product To cart
  addToCart(productId: string): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl + `cart`,
      { productId: productId },
      { headers: this.headers }
    );
  }

  // get The user cart
  getUserCart(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `cart`, {
      headers: this.headers,
    });
  }
  // remove cart item
  removeCartItem(productId: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart/${productId}`, {
      headers: this.headers,
    });
  }
/********************* start wishlist***************** */
  // Add Product To wishlist
  addToWishlist(productId: string): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl + `wishlist`,
      { productId: productId },
      { headers: this.headers }
    );
  }
    // get The user cart
    getUserWishlist(): Observable<any> {
      return this._HttpClient.get(this.baseUrl + `wishlist`, {
        headers: this.headers,
      });
    }
     // remove cart item
     removeWishlistItem(productId: string): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `wishlist/${productId}`, {
      headers: this.headers,
    });
  }

/************************* End wishlist************* */






  // Update count items
  updateCount(productId: string, countNum: number): Observable<any> {
    return this._HttpClient.put(
      this.baseUrl + `cart/${productId}`,
      {
        count: countNum,
      },
      { headers: this.headers }
    );
  }
  // empty cart
  emptyCart(): Observable<any> {
    return this._HttpClient.delete(this.baseUrl + `cart`, {
      headers: this.headers,
    });
  }

  // payment checkout
  checkout(cartId: string | null, userInfo: object): Observable<any> {
    return this._HttpClient.post(
      this.baseUrl +
        `orders/checkout-session/${cartId}?url=http://localhost:4200`,
      {
        shippingAddres: userInfo,
      },
      { headers: this.headers }
    );
  }

  // All Orders
  allorders(): Observable<any> {
    console.log(this.userId);
    return this._HttpClient.get(this.baseUrl +
      `orders/user/${this.userId}`
    );
  }
}
