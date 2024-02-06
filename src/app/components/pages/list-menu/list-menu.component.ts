import { Component } from '@angular/core';

@Component({
  selector: 'app-list-menu',
  standalone: true,
  imports: [],
  templateUrl: './list-menu.component.html',
  styleUrl: './list-menu.component.css'
})
export class ListMenuComponent {
  MenuList=[
    {
      name:"Product Menu",
      color:"green",
      date:"2018-04-18T00:00:00"
    },
    {
      name:"Category Menu",
      color:"orange",
      date:"2018-04-18T00:00:00"
    },
    {
      name:"Subcategory Menu",
      color:"green",
      date:"2018-04-18T00:00:00"
    },
    {
      name:"Sales Menu",
      color:"gray",
      date:"2018-04-18T00:00:00"
    },
    {
      name:"Vendor Menu",
      color:"green",
      date:"2018-04-18T00:00:00"
    },
    {
      name:"Category Menu",
      color:"orange",
      date:"2018-04-18T00:00:00"
    },
  ]

}
