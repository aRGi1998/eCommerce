import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  items!: any[];
  
  constructor(private cartService: CartService,) { }

  ngOnInit(): void {
    this.items = this.cartService.getWishlist();
    console.log(this.items, 'wishlist items')
  }
}
