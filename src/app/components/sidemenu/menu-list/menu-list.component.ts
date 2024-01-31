import { Component } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { MenuItemsComponent } from '../menu-items/menu-items.component';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [ProfileComponent,MenuItemsComponent],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css'
})
export class MenuListComponent {

}
