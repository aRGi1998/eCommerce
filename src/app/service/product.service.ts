import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private products: Product[] = [
    { id: 1, name: 'Black Tea', price: 10, imagePath: 'assets/images/product2.jpg', description: 'Black Tea: Special Seeds', qty: 1 , isInWishlist: false},
    { id: 2, name: 'Masala Tea', price: 15.5, imagePath: 'assets/images/product3.jpg', description: 'Masala Tea: Full of Masala', qty: 1, isInWishlist: false },
    { id: 3, name: 'Milk Tea', price: 18.99, imagePath: 'assets/images/product4.jpg', description: 'Milk Tea: Pure Milk', qty: 1 , isInWishlist: false},
    { id: 4, name: 'Lemon Tea', price: 100, imagePath: 'assets/images/product5.jpg', description: 'This Tea for only developers', qty: 1 , isInWishlist: false},
    { id: 5, name: 'Bedham Chai', price: 150, imagePath: 'assets/images/product6.jpg', description: 'Bedham chai from Kerala', qty: 1 , isInWishlist: false},
    { id: 6, name: 'RG special Tea', price: 199, imagePath: 'assets/images/product7.jpg', description: 'our own brand tea', qty: 1, isInWishlist: false }
  ];
  getProducts(searchTerm?: any): Product[] {
    if (searchTerm) {
      searchTerm = searchTerm.toLowerCase();
      return this.products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
    } else {
      return this.products;
    }
  }
}
