import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-translation',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './translation.component.html',
  styleUrl: './translation.component.css',
})
export class TranslationComponent {
  Trans = [
    {
      userKey: 'user:users.user-lists',
      rus: '	имя пользователя',
      arab: 'اسم المستخدم الأول',
      eng: 'user first name',
    },
    {
      userKey: 'user:users.user-last-name',
      rus: 'фамилия пользователя',
      arab: 'اسم المستخدم الأخير',
      eng: '	user last name',
    },
    {
      userKey: 'user:users.user-login',
      rus: 'логин пользователя',
      arab: '	دخول المستخدم',
      eng: 'user login',
    },
    {
      userKey: 'user:users.user-add-product',
      rus: 'добавить продукт',
      arab: 'أضف المنتج',
      eng: 'add product',
    },
    {
      userKey: 'user:users.user-orders-list',
      rus: 'упорядоченный список',
      arab: 'قائمة الأوامر',
      eng: 'orders list',
    },
    {
      userKey: 'user:users.user-coupon-list',
      rus: 'список купонов',
      arab: 'قائمة القسائم',
      eng: 'coupon list',
    },
  ];
}
