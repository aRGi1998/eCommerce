import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products!: Product[];

  constructor(
    private productService: ProductService,
    public cartService: CartService,
    ) { }

  ngOnInit(): void {
      this.products = this.productService.getProducts();
      console.log(this.products,'y')
    }
    addToCart(product:any) {
      this.cartService.addToCart(product);
      product.isInWishlist = true;
     }
    addToWishlist(product:any){
      this.cartService.addToWishlist(product);
      product.isInWishlist
    }
}
