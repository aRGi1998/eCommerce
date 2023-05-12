import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items!: any[];
  
  constructor(private cartService: CartService,) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.items, 'cart items')
  }

  increaseQty(item: any) {
    console.log('h')
    item.qty++;
    item.total = item.price * item.qty;
  }

  decreaseQty(item: any) {
    if (item.qty > 1) {
      item.qty--;
      item.total = item.price * item.qty;
    }
  }  

  removeItem(item: any) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
  
  calculateTotal(): number {
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.qty;
    }
    return total;
  }

  ShippingTotal(total: any) {
    if (total < 500) {
      return 40;
    } else {
      return 0;
    }
  }

  calculateSubTotal() {
    const total = this.calculateTotal();
    const shippingCost = this.ShippingTotal(total);
    return total + shippingCost;
  }
}
