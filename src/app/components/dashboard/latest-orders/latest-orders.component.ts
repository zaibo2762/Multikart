import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-orders',
  standalone: true,
  imports: [],
  templateUrl: './latest-orders.component.html',
  styleUrl: './latest-orders.component.css'
})
export class LatestOrdersComponent {
  Orders=[
    {
      id:1,
      total:"$120.00",
      paymentM:"Bank Transfer",
      status:"OnWay"
    },
    {
      id:2,
      total:"$90.00",
      paymentM:"Ewallet",
      status:"Delivered"
    },
    {
      id:3,
      total:"$240.00",
      paymentM:"Cash",
      status:"Delivered"
    },
    {
      id:4,
      total:"$120.00",
      paymentM:"Direct Deposit",
      status:"$6523"
    },
    {
      id:5,
      total:"$50.00",
      paymentM:"Bank Transfer",
      status:"Delivered"
    },
  ]
}
