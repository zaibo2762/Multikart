import { Component } from '@angular/core';

@Component({
  selector: 'app-taxes',
  standalone: true,
  imports: [],
  templateUrl: './taxes.component.html',
  styleUrl: './taxes.component.css',
})
export class TaxesComponent {
  Tax = [
    {
      title: 'USASTE-PS6N0',
      usd: 'USASTCITY-6*',
      per: '10%',
      exchange: '15.24',
    },
    {
      title: 'USASTE-PS6N0',
      usd: 'USASTCITY-6*',
      per: '18%',
      exchange: '5.29',
    },
    {
      title: 'USASTE-PS6N0',
      usd: 'USASTCITY-6*',
      per: '25%',
      exchange: '4.78',
    },
    {
      title: 'USASTE-PS6N0',
      usd: 'USASTCITY-6*',
      per: '40%',
      exchange: '3.20',
    },
    {
      title: 'USASTE-PS6N0',
      usd: 'USASTCITY-6*',
      per: '50%',
      exchange: '4.78',
    },
    {
      title: 'USASTE-PS6N0',
      usd: 'USASTCITY-6*',
      per: '80%',
      exchange: '8.4',
    },
  ];
}
