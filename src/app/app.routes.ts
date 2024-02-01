import { Routes } from '@angular/router';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:"",
        component:DashboardComponent
    },
    {
        path:"order",
        component:OrdersComponent
    }
];
