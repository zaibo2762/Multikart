import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css',
})
export class TransactionsComponent {
  Details = [
    {
      orderID: 142,
      TranID: '#212145214510',
      date: 'Sep 2,19',
      method: 'Paypal',
      status: 'Pending',
      amount: '$175/-',
    },
    {
      orderID: 217,
      TranID: '#784561421721',
      date: 'Dec 10,19',
      method: 'Stripe',
      status: 'Process',
      amount: '$845/-',
    },
    {
      orderID: 546,
      TranID: '#476547821142',
      date: 'Feb 15,19',
      method: 'Stripe',
      status: 'Delivered',
      amount: '$314/-',
    },
    {
      orderID: 617,
      TranID: '#74538412754',
      date: 'Mar 27,19',
      method: 'Paypal',
      status: 'Pending',
      amount: '$217/-',
    },
    {
      orderID: 565,
      TranID: '#96725125102',
      date: 'Sep 1,19',
      method: 'Stripe',
      status: 'Process',
      amount: '$542/-',
    },
    {
      orderID: 754,
      TranID: '#547121023651',
      date: 'May 18,19',
      method: 'Paypal',
      status: 'Pending',
      amount: '$2141/-',
    },
    {
      orderID: 164,
      TranID: '#876412242215',
      date: 'Jan 14,19',
      method: 'Stripe',
      status: 'Delivered',
      amount: '$4872/-',
    },
    {
      orderID: 841,
      TranID: '#31534221621',
      date: 'Apr 22,19',
      method: 'Paypal',
      status: 'Process',
      amount: '$7841/-',
    },
    {
      orderID: 354,
      TranID: '#78412457421',
      date: 'Mar 26,19',
      method: 'Paypal',
      status: 'Pending',
      amount: '$2784/-',
    },
    {
      orderID: 784,
      TranID: '#241524757448',
      date: 'Feb 29,19',
      method: 'Stripe',
      status: 'Delivered',
      amount: '$461/-',
    },
  ];
}
