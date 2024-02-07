import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private menuService: MenuService) {}

  ngOnInit() {
    // Optionally subscribe to menu visibility changes for styling (if needed)
  }

  toggleMenu() {
    this.menuService.toggleMenu();
  }
}
