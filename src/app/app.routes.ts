import { Routes } from '@angular/router';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/pages/transactions/transactions.component';
import { ListCouponComponent } from './components/pages/list-coupon/list-coupon.component';
import { CreateCouponComponent } from './components/pages/create-coupon/create-coupon.component';
import { ListPagesComponent } from './components/pages/list-pages/list-pages.component';
import { CreatePageComponent } from './components/pages/create-page/create-page.component';
import { MediaComponent } from './components/pages/media/media.component';

export const routes: Routes = [
    {
        path:"",
        component:DashboardComponent
    },
    {
        path:"order",
        component:OrdersComponent
    },
    {
        path:"transaction",
        component:TransactionsComponent
    },
    {
        path:"listCoupon",
        component:ListCouponComponent
    },
    {
        path:"createCoupon",
        component:CreateCouponComponent
    },
    {
        path:"pagelist",
        component:ListPagesComponent
    },
    {
        path:"pagecreate",
        component:CreatePageComponent
    },
    {
        path:"media",
        component:MediaComponent
    },
];
