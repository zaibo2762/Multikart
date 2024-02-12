import { Component, OnInit,ViewChild } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { RouterLink } from '@angular/router';
import { ChatboxService } from '../../services/chatbox.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  constructor(private menuService: MenuService,private chatservice:ChatboxService) {}
  toggleChatBox() {
    this.chatservice.toggleChatBox();
  }
  ngOnInit() {
    // Optionally subscribe to menu visibility changes for styling (if needed)
  }
  
  toggleMenu() {
    this.menuService.toggleMenu();
  }
  isactive:boolean=false
  toggleDropdown(show:boolean) {
    this.isactive = show;
  }
  showlan:boolean=false
  tooglelan(show:boolean){
    this.showlan = show
  }
  showmenu:boolean=false
  toggledrop(show :boolean){
    this.showmenu = !this.showmenu
  }
  
  
}
