import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuListComponent } from './components/sidemenu/menu-list/menu-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { MenuService } from './services/menu.service';
import { OrdersComponent } from './components/pages/orders/orders.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponent,MenuListComponent,DashboardComponent,HighchartsChartModule,OrdersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Multikart';
  constructor(private menuService: MenuService) {}
}
