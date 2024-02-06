import { Routes } from '@angular/router';
import { OrdersComponent } from './components/pages/orders/orders.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TransactionsComponent } from './components/pages/transactions/transactions.component';
import { ListCouponComponent } from './components/pages/list-coupon/list-coupon.component';
import { CreateCouponComponent } from './components/pages/create-coupon/create-coupon.component';
import { ListPagesComponent } from './components/pages/list-pages/list-pages.component';
import { CreatePageComponent } from './components/pages/create-page/create-page.component';
import { MediaComponent } from './components/pages/media/media.component';
import { ListMenuComponent } from './components/pages/list-menu/list-menu.component';
import { CreateMenuComponent } from './components/pages/create-menu/create-menu.component';
import { UserListComponent } from './components/pages/user-list/user-list.component';
import { CreateUserComponent } from './components/pages/create-user/create-user.component';
import { VendorListComponent } from './components/pages/vendor-list/vendor-list.component';
import { CreateVendorsComponent } from './components/pages/create-vendors/create-vendors.component';
import { TranslationComponent } from './components/pages/translation/translation.component';
import { CurrencyRatesComponent } from './components/pages/currency-rates/currency-rates.component';
import { TaxesComponent } from './components/pages/taxes/taxes.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { PProfileComponent } from './components/pages/p-profile/p-profile.component';

export const routes: Routes = [
    {
        path:"dashboard",
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
    {
        path:"listmenu",
        component:ListMenuComponent
    },
    {
        path:"createmenu",
        component:CreateMenuComponent
    },
    {
        path:"userlist",
        component:UserListComponent
    },
    {
        path:"createuser",
        component:CreateUserComponent
    },
    {
        path:"vendorlist",
        component:VendorListComponent
    },
    {
        path:"createvendor",
        component:CreateVendorsComponent
    },
    {
        path:"translation",
        component:TranslationComponent
    },
    {
        path:"currencyrate",
        component:CurrencyRatesComponent
    },
    {
        path:"taxes",
        component:TaxesComponent
    },
    {
        path:"reports",
        component:ReportsComponent
    },
    {
        path:"profile",
        component:PProfileComponent
    },
];
