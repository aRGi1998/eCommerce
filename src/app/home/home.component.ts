import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { CartService } from '../service/cart.service';
import { Product } from '../models/product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products!: Product[];
  product!: Product;

  constructor(
    private productService: ProductService,
    public cartService: CartService,
    ) { }
    ngOnInit(): void {
      const cart = this.cartService.getItems();
      const cartLength = cart.length;
      console.log(`The cart contains ${cartLength} items.`);
      this.getProducts();
    }
    getProducts(): void {
      this.products = this.productService.getProducts();
    }
  
    addToCart(product:any) {
     this.cartService.addToCart(product);
     product.isInWishlist = true;
    }
    
   }
  


