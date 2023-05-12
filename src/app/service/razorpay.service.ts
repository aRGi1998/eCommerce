import { Injectable } from '@angular/core';
// import { ReplaySubject } from 'rxjs';
// import Razorpay from 'razorpay';


@Injectable({
  providedIn: 'root'
})
export class RazorpayService {
  
//   private razorpayOptions: any;
//   private paymentResponseSubject: ReplaySubject<any> = new ReplaySubject<any>();

//   constructor() { }

//   initializePayment(amount: number): void {
//     this.razorpayOptions = {
//       key: 'YOUR_RAZORPAY_API_KEY',
//       amount: amount * 100, // Amount in paise or smallest currency unit
//       name: 'Your Company Name',
//       description: 'Payment for your product or service',
//       handler: this.paymentResponseHandler.bind(this),
//       prefill: {
//         name: 'John Doe',
//         email: 'john@example.com',
//         contact: '9876543210'
//       },
//       notes: {
//         address: 'Address for product delivery'
//       },
//       theme: {
//         color: '#F37254'
//       }
//     };
//      const razorpayPayment: any = new Razorpay(this.razorpayOptions);
//       razorpayPayment.open();
//   }

//   private paymentResponseHandler(response: any): void {
//     this.paymentResponseSubject.next(response);
//   }

//   getPaymentResponse(): ReplaySubject<any> {
//     return this.paymentResponseSubject;
//   }
// }
}