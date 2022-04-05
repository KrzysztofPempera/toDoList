import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, HostListener, OnInit } from '@angular/core';
import { navLinks, NavLink } from '../nav-links';
import { NavbarService } from '../navbar.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})



export class NavBarComponent implements OnInit {

  navbar: NavLink[] = navLinks;

  toggler: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.toggler = false;
    this.navbarService.collapsed = false;
  }


  toggle(){
    this.toggler = !this.toggler
  }

  showMenu(){
    this.navbarService.showMenu();
  }

  constructor(
    public navbarService: NavbarService) { }

  ngOnInit(): void {
  }


}
