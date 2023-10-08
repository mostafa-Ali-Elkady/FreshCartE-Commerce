import { Component, OnInit, Renderer2 } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductsComponent } from "../products/products.component";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { productsService } from "src/app/services/products.service";
import { RouterLink } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { CartService } from "src/app/services/cart.service";
import { FormsModule, NgModel } from "@angular/forms";
import { SearchPipe } from "src/app/pipes/search.pipe";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    ProductsComponent,
    CarouselModule,
    RouterLink,
    FormsModule,
    SearchPipe,
  ],
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  // Main Slider
  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
  // CategorySlider
  categories: any[] = [];
  allProducts: any[] = [];
  searchWord: string = "";
  constructor(
    private _productsService: productsService,
    private _CartService: CartService,
    private _ToastrService: ToastrService,
    private _Renderer2: Renderer2
  ) {
    // Do not Write in constructor
  }
  ngOnInit(): void {
    this._productsService.getCategories().subscribe({
      next: (res) => {
        this.categories = res.data;
      },
    });
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
  // slider
  categorySlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      600: {
        items: 3,
      },

      900: {
        items: 4,
      },
      1200: {
        items: 6,
      },
      1400: {
        items: 7,
      },
    },
  };
}
