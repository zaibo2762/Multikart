import { Component } from '@angular/core';

@Component({
  selector: 'app-currency-rates',
  standalone: true,
  imports: [],
  templateUrl: './currency-rates.component.html',
  styleUrl: './currency-rates.component.css'
})
export class CurrencyRatesComponent {
  Currency=[
    {
      title:"US Dollar",
      usd:"2.4512478",
      code:"USD",
      exchange:"0.57912364"
    },
    {
      title:"Afghanistan Afghani",
      usd:"5.14761214",
      code:"AFN",
      exchange:"1.05761432"
    },
    {
      title:"United Arab Emirates Dirham",
      usd:"12.02646581",
      code:"AED",
      exchange:"0.15642465"
    },
    {
      title:"European Union",
      usd:"8.124712425",
      code:"EUR",
      exchange:"0.187541231"
    },
    {
      title:"Japanese",
      usd:"10.78422121",
      code:"JPY",
      exchange:"3.8425110221"
    },
    {
      title:"Great Britain Pound",
      usd:"7.1246121152",
      code:"GBP",
      exchange:"0.25522648"
    },
  ]
}
