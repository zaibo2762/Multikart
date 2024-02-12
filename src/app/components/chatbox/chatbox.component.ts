import { Component } from '@angular/core';
import { ChatboxService } from '../../services/chatbox.service';

@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.css'
})
export class ChatboxComponent {
  constructor(private chatservice: ChatboxService) {}
  get isChatBoxVisible() {
    return this.chatservice.isChatBoxVisible();
  }
   friends=[
    {
      name:"Vincent Porter",
      img:"assets/user.png",
      status:"Online"
    },
    {
      name:"Ain Chavez",
      img:"assets/man.png",
      status:"28 Minutes ago"
    },
    {
      name:"Kori Thomas",
      img:"assets/user1.jpg",
      status:"Online"
    },
    {
      name:"Erica Hughes",
      img:"assets/user2.jpg",
      status:"Online"
    },
    {
      name:"Ginger Jhonsaon",
      img:"assets/user3.jpg",
      status:"2 Minutes ago"
    },
   ]
}
