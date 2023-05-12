import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  constructor(
    public cartService: CartService
  ) {}
  ngOnInit() {
    const cart = this.cartService.getItems();
    const cartLength = cart.length;
    console.log(`The cart contains ${cartLength} items.`);
    const wishlist = this.cartService.getWishlist();
    const listLength = wishlist.length;
    console.log(`The cart contains ${listLength} items.`);
  }
}
