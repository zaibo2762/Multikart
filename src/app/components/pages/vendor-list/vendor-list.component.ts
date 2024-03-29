import { Component } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-vendor-list',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './vendor-list.component.html',
  styleUrl: './vendor-list.component.css',
})
export class VendorListComponent {
  Vendors = [
    {
      img: 'assets/user.png',
      name: 'Anna Mull',
      products: '1670',
      s_name: 'Zotware',
      date: '8/10/18',
      w_balance: '$576132',
      revenue: '$9761266',
      icon1: 'assets/pen-to-square-solid.svg',
      icon2: 'assets/trash-solid.svg',
    },
    {
      img: 'assets/man.png',
      name: 'Colton Clay',
      products: '5791',
      s_name: 'green plus',
      date: '30/10/18',
      w_balance: '$765132',
      revenue: '$8971266',
      icon1: 'assets/pen-to-square-solid.svg',
      icon2: 'assets/trash-solid.svg',
    },
    {
      img: 'assets/user1.jpg',
      name: 'Gray Brody',
      products: '578',
      s_name: 'conecom',
      date: '10/10/18',
      w_balance: '$577132',
      revenue: '$9768966',
      icon1: 'assets/pen-to-square-solid.svg',
      icon2: 'assets/trash-solid.svg',
    },
    {
      img: 'assets/user2.jpg',
      name: 'Lane Skyler',
      products: '8972',
      s_name: 'golddex',
      date: '10/7/18',
      w_balance: '$576872',
      revenue: '$9077555',
      icon1: 'assets/pen-to-square-solid.svg',
      icon2: 'assets/trash-solid.svg',
    },
    {
      img: 'assets/user3.jpg',
      name: 'Lane Skyler',
      products: '8678',
      s_name: 'plexzap',
      date: '8/8/18',
      w_balance: '$575132',
      revenue: '$97689966',
      icon1: 'assets/pen-to-square-solid.svg',
      icon2: 'assets/trash-solid.svg',
    },
    {
      img: 'assets/user.png',
      name: 'Paige tuner',
      products: '4086',
      s_name: 'Finhigh',
      date: '8/2/18',
      w_balance: '$576132',
      revenue: '$9761266',
      icon1: 'assets/pen-to-square-solid.svg',
      icon2: 'assets/trash-solid.svg',
    },
    {
      img: 'assets/user1.jpg',
      name: 'Peraz Alonzo',
      products: '900',
      s_name: 'Betatech',
      date: '24/10/18',
      w_balance: '$589132',
      revenue: '$9776466',
      icon1: 'assets/pen-to-square-solid.svg',
      icon2: 'assets/trash-solid.svg',
    },
    {
      img: 'assets/user2.jpg',
      name: 'Petey Cruiser',
      products: '6751',
      s_name: 'Warephase',
      date: '16/10/18',
      w_balance: '$576132',
      revenue: '$9761266',
      icon1: 'assets/pen-to-square-solid.svg',
      icon2: 'assets/trash-solid.svg',
    },
    {
      img: 'assets/user3.jpg',
      name: 'Rowan Torres',
      products: '1689',
      s_name: 'Sunnamplex',
      date: '8/10/18',
      w_balance: '$576132',
      revenue: '$9761266',
      icon1: 'assets/pen-to-square-solid.svg',
      icon2: 'assets/trash-solid.svg',
    },
    {
      img: 'assets/man.png',
      name: 'Woter Maxine',
      products: '670',
      s_name: 'kan-Code',
      date: '5/12/18',
      w_balance: '$576132',
      revenue: '$9761266',
      icon1: 'assets/pen-to-square-solid.svg',
      icon2: 'assets/trash-solid.svg',
    },
  ];
}
