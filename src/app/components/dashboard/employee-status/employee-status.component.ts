import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-status',
  standalone: true,
  imports: [],
  templateUrl: './employee-status.component.html',
  styleUrl: './employee-status.component.css',
})
export class EmployeeStatusComponent {
  Employee = [
    {
      id: 1,
      name: 'John Doe (14+ Online)',
      imgUrl: '/assets/man.png',
      desig: 'Designer',
      experience: '2 years',
      progress: '32',
    },
    {
      id: 2,
      name: 'Holio Mako (250+ Online)',
      imgUrl: '/assets/user.png',
      desig: 'Developer',
      experience: '3 years',
      progress: '70',
    },
    {
      id: 3,
      name: 'Mohsib Lara (99+ Online)',
      imgUrl: '/assets/user1.jpg',
      desig: 'Tester',
      experience: '5 Months',
      progress: '20',
    },
    {
      id: 4,
      name: 'Haleri Soli (150+ Online)',
      imgUrl: '/assets/user2.jpg',
      desig: 'Designer',
      experience: '3 Months',
      progress: '10',
    },
    {
      id: 5,
      name: 'Pusiz Bia (14+ Online)',
      imgUrl: '/assets/user3.jpg',
      desig: 'Designer',
      experience: '5 years',
      progress: '80',
    },
  ];
}
