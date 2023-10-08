import { Component, OnInit, Renderer2 } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CartService } from "src/app/services/cart.service";
CartService;
@Component({
  selector: "app-nav-main",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: "./nav-main.component.html",
  styleUrls: ["./nav-main.component.css"],
})
export class NavMainComponent implements OnInit {
  isLogin: boolean = false;
  cartnum: number = 0;
  cartId: any = "";
  username: string | null = "";
  constructor(
    private _AuthService: AuthService,
    private _Renderer2: Renderer2,
    private _CartService: CartService
  ) {}
  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next: (data) => {
        this.cartnum = data;
        console.log(this.cartnum);
      },
    });

    if (this.cartnum > 0) {
      this._CartService.getUserCart().subscribe({
        next: (response) => {
          this.cartnum = response.numOfCartItems;
        },
      });
    }
    this._CartService.cartId.subscribe({
      next: (data) => {
        this.cartId = data;
      },
    });
    this._AuthService.userName.subscribe({
      next: (data) => {
        this.username = data;
      },
    });
  }
  logOut() {
    this._AuthService.logOut();
    // this._CartService.emptyCart().subscribe({
    //   next: (response) => {
    //     this._CartService.cartNumber.next(response.numOfCartItems);
    //   },
    // });
  }

  toggleMode() {
    const body = document.getElementsByTagName("body")[0];
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
  }
}
