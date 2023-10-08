import { Component, OnInit, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartService } from "src/app/services/cart.service";
import { ToastrService } from "ngx-toastr";
import { RouterLink } from "@angular/router";
@Component({
  selector: "app-wishlist",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./wishlist.component.html",
  styleUrls: ["./wishlist.component.css"],
})
export class WishlistComponent {
  constructor(
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _Renderer2: Renderer2
  ) {}
  wishlist: any = null;
  wishlistId: any = "";
  wishlistProducts: any[] = [];
  ngOnInit(): void {
    this._CartService.getUserWishlist().subscribe({
      next: (response) => {
        this.wishlistProducts = response.data;
        console.log(this.wishlistProducts);
      },
    });
  }

  // remove wishlist item
  removeWishlistItem(id: string, element: HTMLButtonElement) {
    this._Renderer2.setAttribute(element, "disabled", "true");
    this._CartService.removeWishlistItem(id).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this._Renderer2.removeAttribute(element, "disabled");
        this.wishlistProducts = response.data;
        console.log("delete", this.wishlistProducts);
        this._CartService.getUserWishlist().subscribe({
          next: (response) => {
            this.wishlistProducts = response.data;
            console.log(this.wishlistProducts);
          },
        });
      },
      error: (err) => {
        this._Renderer2.removeAttribute(element, "disabled");
      },
    });
  }
  //add product to Wishlist
  addtocart(productId: string, element: HTMLButtonElement) {
    this._Renderer2.setAttribute(element, "disabled", "true");
    this._CartService.addToCart(productId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this._CartService.cartNumber.next(response.numOfCartItems);
        this._Renderer2.removeAttribute(element, "disabled");
      },
      error: (err) => {
        this._Renderer2.removeAttribute(element, "disabled");
      },
    });
  }
}
