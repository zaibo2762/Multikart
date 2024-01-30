import { Component } from '@angular/core';
import { MarketValueComponent } from './market-value/market-value.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MarketValueComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
