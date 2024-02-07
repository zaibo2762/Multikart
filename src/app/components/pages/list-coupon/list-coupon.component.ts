import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-coupon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-coupon.component.html',
  styleUrl: './list-coupon.component.css',
})
export class ListCouponComponent {
  Coupons = [
    {
      title: '10% Off',
      code: 'Percent10',
      discount: '10%',
      color: 'green',
    },
    {
      title: '25% Off',
      code: 'Percent25',
      discount: '25%',
      color: 'yellow',
    },
    {
      title: '5% Off',
      code: 'Percent5',
      discount: '5%',
      color: 'green',
    },
    {
      title: '2% Off',
      code: 'Percent2',
      discount: '2%',
      color: 'gray',
    },
    {
      title: '50% Off',
      code: 'Percent50',
      discount: '50%',
      color: 'yellow',
    },
    {
      title: '70% Off',
      code: 'Percent70',
      discount: '70%',
      color: 'green',
    },
    {
      title: '75% Off',
      code: 'Percent75',
      discount: '75%',
      color: 'yellow',
    },
    {
      title: '80% Off',
      code: 'Percent80',
      discount: '80%',
      color: 'gray',
    },
  ];
}
