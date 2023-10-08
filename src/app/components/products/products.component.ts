import { Component, NgModule, OnInit, Renderer2 } from "@angular/core";
import { productsService } from "src/app/services/products.service";
import { CartService } from "src/app/services/cart.service";
import { ToastrService } from "ngx-toastr";
import { CommonModule } from "@angular/common";
import { SearchPipe } from "src/app/pipes/search.pipe";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    SearchPipe,
  ],
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  constructor(
    private _productsService: productsService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _Renderer2: Renderer2
  ) {}
  allProducts: any[] = [];
  searchWord: string = "";
  ngOnInit(): void {
    this._productsService.getAllProducts().subscribe({
      next: (response) => {
        this.allProducts = response.data;
      },
    });
  }
  // Add To wishList
  addToWishlist(productId: string, element:HTMLElement ) {
    this._CartService.addToWishlist(productId).subscribe({
      next: (response) => {
        console.log(response);
        this._ToastrService.success(response.message);
        this._Renderer2.setStyle(element, "color", "red");
      },
    });
  }
// Add to cart
addToCart(productId: string, element: HTMLButtonElement) {
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
