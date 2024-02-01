import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private isMenuVisible = new BehaviorSubject<boolean>(true);
  menuVisibility$ = this.isMenuVisible.asObservable();

  toggleMenu() {
    this.isMenuVisible.next(!this.isMenuVisible.value);
  }
  constructor() { }
}
