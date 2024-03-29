import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [RouterLink,FooterComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  Users = [
    {
      icon1: '/assets/pen-to-square-solid.svg',
      icon2: '/assets/trash-solid.svg',
      img: '/assets/user.png',
      f_name: 'Rowan',
      l_name: 'Torres',
      Email: 'Rowan.torres@gmail.com',
      l_login: '6 Days ago',
      role: 'Customer',
    },
    {
      icon1: '/assets/pen-to-square-solid.svg',
      icon2: '/assets/trash-solid.svg',
      img: '/assets/user1.jpg',
      f_name: 'Alonzo',
      l_name: 'Perez',
      Email: 'alonzo.peres@gmail.com',
      l_login: '2 Days ago',
      role: 'Customer',
    },
    {
      icon1: '/assets/pen-to-square-solid.svg',
      icon2: '/assets/trash-solid.svg',
      img: '/assets/user2.jpg',
      f_name: 'Skyler',
      l_name: 'Lane',
      Email: 'Skyler.lane@gmail.com',
      l_login: '1 Days ago',
      role: 'Customer',
    },
    {
      icon1: '/assets/pen-to-square-solid.svg',
      icon2: '/assets/trash-solid.svg',
      img: '/assets/man.png',
      f_name: 'Brody',
      l_name: 'Gray',
      Email: 'Brody.Gray@gmail.com',
      l_login: '1 Days ago',
      role: 'Admin',
    },
    {
      icon1: '/assets/pen-to-square-solid.svg',
      icon2: '/assets/trash-solid.svg',
      img: '/assets/user3.jpg',
      f_name: 'Colton',
      l_name: 'Clay',
      Email: 'colton.clay@gmail.com',
      l_login: '5 Days ago',
      role: 'Customer',
    },
    {
      icon1: '/assets/pen-to-square-solid.svg',
      icon2: '/assets/trash-solid.svg',
      img: '/assets/user.png',
      f_name: 'Maxine',
      l_name: 'Votter',
      Email: 'maxine.votter@gmail.com',
      l_login: '10 Days ago',
      role: 'Customer',
    },
    {
      icon1: '/assets/pen-to-square-solid.svg',
      icon2: '/assets/trash-solid.svg',
      img: '/assets/user1.jpg',
      f_name: 'Rowan',
      l_name: 'Torres',
      Email: 'Rowan.torres@gmail.com',
      l_login: '6 Days ago',
      role: 'Customer',
    },
    {
      icon1: '/assets/pen-to-square-solid.svg',
      icon2: '/assets/trash-solid.svg',
      img: '/assets/user3.jpg',
      f_name: 'Colton',
      l_name: 'Clay',
      Email: 'colton.clay@gmail.com',
      l_login: '5 Days ago',
      role: 'Customer',
    },
    {
      icon1: '/assets/pen-to-square-solid.svg',
      icon2: '/assets/trash-solid.svg',
      img: '/assets/user2.jpg',
      f_name: 'Brody',
      l_name: 'Gray',
      Email: 'brody.gray@gmail.com',
      l_login: '3 Days ago',
      role: 'Customer',
    },
    {
      icon1: '/assets/pen-to-square-solid.svg',
      icon2: '/assets/trash-solid.svg',
      img: '/assets/man.png',
      f_name: 'John',
      l_name: 'Gray',
      Email: 'John.gray@gmail.com',
      l_login: '1 Days ago',
      role: 'Admin',
    },
  ];
}
