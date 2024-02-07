import { Component } from '@angular/core';
import { MarketValueComponent } from './market-value/market-value.component';
import { LatestOrdersComponent } from './latest-orders/latest-orders.component';
import { InfoComponent } from './info/info.component';
import { SalesInfoComponent } from './sales-info/sales-info.component';
import { BuySellComponent } from './buy-sell/buy-sell.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { EmployeeStatusComponent } from './employee-status/employee-status.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MarketValueComponent,
    LatestOrdersComponent,
    InfoComponent,
    SalesInfoComponent,
    BuySellComponent,
    ProductCartComponent,
    EmployeeStatusComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
