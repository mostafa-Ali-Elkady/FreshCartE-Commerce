import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: any[] = [];
constructor(private _productsService:productsService){

}
ngOnInit(): void {
  this.getCategories()
}

getCategories() {
  this._productsService.getCategories().subscribe({
    next:(response)=>{ 
      console.log(response.data);
      this.categories = response.data }
  })
}
}
