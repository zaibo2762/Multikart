import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from '../profile/profile.component';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [ProfileComponent, MenuItemsComponent],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.css',
})
export class MenuListComponent implements OnInit {
  isMenuVisible: boolean = false; // For conditional rendering

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.menuVisibility$.subscribe((visible) => {
      this.isMenuVisible = visible;
    });
  }
}
