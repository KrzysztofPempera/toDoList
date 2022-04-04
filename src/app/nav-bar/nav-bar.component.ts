import { Component, OnInit } from '@angular/core';
import { navLinks, NavLink } from '../nav-links';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})



export class NavBarComponent implements OnInit {

  navbar: NavLink[] = navLinks;

  constructor() { }

  ngOnInit(): void {

  }


}
