import { Component } from '@angular/core';
import { RazorpayService } from '../service/razorpay.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private razorpayService: RazorpayService) { }
  // makePayment(): void {
  //   const amount = 1000; // Example amount in rupees
  //   this.razorpayService.initializePayment(amount);
  // }
  
}
