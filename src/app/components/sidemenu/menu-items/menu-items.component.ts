import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink, CommonModule],
  templateUrl: './menu-items.component.html',
  styleUrl: './menu-items.component.css',
})
export class MenuItemsComponent {
  menuItems = [
    {
      name: 'Dashboard',
      icon: 'assets/house-solid.svg',
      path: 'dashboard',
    },
    {
      name: 'Products',
      icon: 'assets/cube-solid.svg',
      children: [
        {
          name: 'Physical',
          path: '',
        },
        {
          name: 'Digital',
          path: '',
        },
      ],
    },
    {
      name: 'Sales',
      icon: '/assets/dollar-sign-solid.svg',
      children: [
        {
          name: 'Order',
          path: 'order',
        },
        {
          name: 'Transaction',
          path: 'transaction',
        },
      ],
    },
    {
      name: 'Coupon',
      icon: '/assets/tag-solid.svg',
      children: [
        {
          name: 'List Coupon',
          path: 'listCoupon',
        },
        {
          name: 'Create Coupon',
          path: 'createCoupon',
        },
      ],
    },
    {
      name: 'Pages',
      icon: '/assets/clipboard-regular.svg',
      children: [
        {
          name: 'List Pages',

          path: 'pagelist',
        },
        {
          name: 'Create Pages',
          path: 'pagecreate',
        },
      ],
    },
    {
      name: 'Media',
      icon: '/assets/camera-solid.svg',
      path: 'media',
    },
    {
      name: 'Menu',
      icon: '/assets/bars-solid.svg',
      children: [
        {
          name: 'List Menu',
          path: 'listmenu',
        },
        {
          name: 'Create Menu',
          path: 'createmenu',
        },
      ],
    },
    {
      name: 'Users',
      icon: '/assets/user-plus-solid.svg',
      children: [
        {
          name: 'User List',
          path: 'userlist',
        },
        {
          name: 'Create User',
          path: 'createuser',
        },
      ],
    },
    {
      name: 'Vendor',
      icon: '/assets/users-solid.svg',
      children: [
        {
          name: 'Vendor List',
          path: 'vendorlist',
        },
        {
          name: 'Create vendor',
          path: 'createvendor',
        },
      ],
    },
    {
      name: 'Localization',
      icon: '/assets/chrome.svg',
      children: [
        {
          name: 'Translation',
          path: 'translation',
        },
        {
          name: 'Currency rate',
          path: 'currencyrate',
        },
        {
          name: 'Taxes',
          path: 'taxes',
        },
      ],
    },
    {
      name: 'Reports',
      icon: '/assets/signal-solid.svg',
      path: 'reports',
    },
    {
      name: 'Settings',
      icon: '/assets/gear-solid.svg',
      children: [
        {
          name: 'Profile',
          path: 'profile',
        },
      ],
    },
    {
      name: 'Invoice',
      icon: '/assets/file-invoice-solid.svg',
      path: 'invoice',
    },
    {
      name: 'Log Out',
      icon: '/assets/right-to-bracket-solid.svg',
      path: 'login',
    },
  ];
}
