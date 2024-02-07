import { Component } from '@angular/core';

@Component({
  selector: 'app-list-pages',
  standalone: true,
  imports: [],
  templateUrl: './list-pages.component.html',
  styleUrl: './list-pages.component.css',
})
export class ListPagesComponent {
  Pages = [
    {
      name: 'Product List',
      color: 'green',
      date: 'Sep 5,18',
    },
    {
      name: 'Digital Products',
      color: 'gray',
      date: 'Mar 10,18',
    },
    {
      name: 'User Media',
      color: 'green',
      date: 'Aug 24,18',
    },
    {
      name: 'About Product',
      color: 'green',
      date: 'Jun 12,18',
    },
    {
      name: 'User Profile',
      color: 'orange',
      date: 'May 26,18',
    },
    {
      name: 'Discount Product',
      color: 'gray',
      date: 'Sep 13,18',
    },
    {
      name: 'About Invoice',
      color: 'green',
      date: 'Dec 30,18',
    },
  ];
}
