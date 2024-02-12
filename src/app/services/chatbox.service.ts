import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatboxService {
  private ischatBoxVisible = false;

  isChatBoxVisible(): boolean {
    return this.ischatBoxVisible;
  }

  toggleChatBox() {
    this.ischatBoxVisible = !this.ischatBoxVisible;
  }
  constructor() { }
}
