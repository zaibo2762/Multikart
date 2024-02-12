import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MenuListComponent } from './components/sidemenu/menu-list/menu-list.component';

import { MenuService } from './services/menu.service';

import { LoginComponent } from './components/pages/login/login.component';
import { Router } from '@angular/router';
import { RegisterComponent } from './components/pages/register/register.component';
import { ChatboxComponent } from './components/chatbox/chatbox.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    MenuListComponent,
    LoginComponent,
    RegisterComponent,
    ChatboxComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Multikart';
  constructor(private menuService: MenuService, public router:Router) {}
}
