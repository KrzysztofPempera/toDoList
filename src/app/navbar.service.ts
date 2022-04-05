import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  collapsed: boolean = false;
  
  showMenu(){
    this.collapsed = !this.collapsed
  }

  constructor() { }
}
