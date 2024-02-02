import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuListComponent } from './components/sidemenu/menu-list/menu-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MenuService } from './services/menu.service';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { TransactionsComponent } from './components/pages/transactions/transactions.component';
import { ListCouponComponent } from './components/pages/list-coupon/list-coupon.component';
import { CreateCouponComponent } from './components/pages/create-coupon/create-coupon.component';
import { ListPagesComponent } from './components/pages/list-pages/list-pages.component';
import { CreatePageComponent } from './components/pages/create-page/create-page.component';
import { MediaComponent } from './components/pages/media/media.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,MenuListComponent,DashboardComponent,HighchartsChartModule,OrdersComponent,TransactionsComponent,ListCouponComponent,CreateCouponComponent,ListPagesComponent,CreatePageComponent,MediaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Multikart';
  constructor(private menuService: MenuService) {}
}
