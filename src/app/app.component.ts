import { Component } from '@angular/core';
import { NavbarService } from './navbar.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'toDoList';

  showMenu(){
    this.navbarService.showMenu();
  }

  constructor(
    public navbarService: NavbarService
  ){}
}
