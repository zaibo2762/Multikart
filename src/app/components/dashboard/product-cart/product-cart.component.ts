import { Component } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
   Cart=[
    {
      id:1,
      detail:"Simply Dummy Text of the printing",
      quantity:1,
      status:"pending",
      price:"$6523"
    },
    {
      id:2,
      detail:"Long established",
      quantity:5,
      status:"cancel",
      price:"$6523"
    },
    {
      id:3,
      detail:"sometime by accident",
      quantity:10,
      status:"cancel",
      price:"$6523"
    },
    {
      id:4,
      detail:"Classical latin literature",
      quantity:9,
      status:"Return",
      price:"$6523"
    },
    {
      id:5,
      detail:"keep the site on internet",
      quantity:8,
      status:"pending",
      price:"$6523"
    },
    {
      id:6,
      detail:"Molestiae consequatr",
      quantity:3,
      status:"cancel",
      price:"$6523"
    },
    {
      id:7,
      detail:"pan can pure",
      quantity:20,
      status:"return",
      price:"$6523"
    },
    
   ]
}
