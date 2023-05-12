import { Component } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  items!: any[];
  
  constructor(private cartService: CartService,) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    console.log(this.items, 'cart items')
  }

}
