import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css',
})
export class InvoicesComponent {
  Invoices = [
    {
      id: 1,
      num: 50764,
      date: '1/1/2018',
      ship: 3.62,
      amount: 65.23,
      tax: 65.28,
      total: 884.16,
    },
    {
      id: 2,
      num: 50765,
      date: '15/3/2018',
      ship: 8.4,
      amount: 146,
      tax: 70,
      total: 225.4,
    },
    {
      id: 3,
      num: 50766,
      date: '28/4/2018',
      ship: 7.3,
      amount: 47,
      tax: 724,
      total: 789,
    },
    {
      id: 4,
      num: 50767,
      date: '31/4/2018',
      ship: 2.0,
      amount: 478,
      tax: 35,
      total: 512,
    },
    {
      id: 5,
      num: 50768,
      date: '2/5/2018',
      ship: 1.5,
      amount: 1460,
      tax: 45.32,
      total: 1515,
    },
    {
      id: 6,
      num: 50769,
      date: '3/5/2018',
      ship: 8.45,
      amount: 768,
      tax: 17,
      total: 780,
    },
    {
      id: 7,
      num: 50770,
      date: '4/5/2018',
      ship: 25.8,
      amount: 874,
      tax: 27.2,
      total: 945.1,
    },
    {
      id: 8,
      num: 50771,
      date: '	8/5/2018',
      ship: 17.2,
      amount: 671,
      tax: 83.7,
      total: 775.9,
    },
    {
      id: 9,
      num: 50772,
      date: '12/5/2018',
      ship: 87.5,
      amount: 572,
      tax: 8.7,
      total: 615,
    },
    {
      id: 10,
      num: 50773,
      date: '16/5/2018',
      ship: 78.12,
      amount: 489,
      tax: 10.57,
      total: 516,
    },
  ];
}
