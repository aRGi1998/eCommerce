import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  items: any[] = []; // array to hold cart items
  wishlist: any[] = []; //array to hold wishlist items

  constructor() { }

  addToCart(product: any) {
    const existingItem = this.items.find(item => item.id === product.id);
    if (existingItem) {
      window.alert('This product is already in your cart!');
    } else {
      this.items.push(product);
      window.alert('Your product has been added to the cart!');
    }
  }
  
  getItems() {
    return this.items;
  }


  addToWishlist(product: any) {
    const existingItem = this.wishlist.find(item => item.id === product.id);
    if (existingItem) {
      window.alert('This product is already in your wishlist!');
    } else {
      this.wishlist.push(product);
      product.isInWishlist = true;
      window.alert('Your product has been added to the wishlist!');
    }
  }
  
  getWishlist() {
    return this.wishlist;
  }

  clearCart() {
    this.items = []; // reset the array
    return this.items;
  }
  
}
