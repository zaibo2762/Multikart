import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  order=[
    {
      orderid:"#51240",
      imgUrl:"/assets/item1.jpg",
      status:"Cash on delivery",
      method:"Paypal",
      orderStatus:"Delivered",
      date:"Dec 10,23",
      total:"$54671"
    },
    {
      orderid:"#51241",
      imgUrl:"/assets/item2.jpg",
      status:"Paid",
      method:"MasterCard",
      orderStatus:"Shipped",
      date:"Feb 15,23",
      total:"$2136"
    },
    {
      orderid:"#51242",
      imgUrl:"/assets/item3.jpg",
      status:"Awaiting Authentication",
      method:"DebitCard",
      orderStatus:"Processing",
      date:"Mar 27,23",
      total:"$8791"
    },
    {
      orderid:"#51243",
      imgUrl:"/assets/item4.jpg",
      status:"Payment Failed",
      method:"DebitCard",
      orderStatus:"Cancelled",
      date:"Sep 1,23",
      total:"$139"
    },
    {
      orderid:"#51244",
      imgUrl:"/assets/item5.jpg",
      status:"Paid",
      method:"Paypal",
      orderStatus:"Shipped",
      date:"Sep 1,23",
      total:"$139"
    },
    {
      orderid:"#51245",
      imgUrl:"/assets/item6.jpg",
      status:"Paid",
      method:"Visa",
      orderStatus:"Delivered",
      date:"Jan 14,23",
      total:"$6791"
    },
    {
      orderid:"#51246",
      imgUrl:"/assets/item7.jpg",
      status:"Awaiting Authentication",
      method:"Credit Card",
      orderStatus:"Processing",
      date:"Apr 22,23",
      total:"$976"
    },
    {
      orderid:"#51247",
      imgUrl:"/assets/item8.jpg",
      status:"Payment Failed",
      method:"Master Card",
      orderStatus:"Cancelled",
      date:"Mar 26,23",
      total:"$3212"
    },
    {
      orderid:"#51248",
      imgUrl:"/assets/item9.jpg",
      status:"Paid",
      method:"Paypal",
      orderStatus:"Shipped",
      date:"Feb 29,23",
      total:"$6791"
    },
    {
      orderid:"#51249",
      imgUrl:"/assets/item10.jpg",
      status:"Paid",
      method:"Master Card",
      orderStatus:"Processing",
      date:"Sep 2,23",
      total:"$9675"
    },
  ]

}
