import { SelectorMatcher } from '@angular/compiler';
import { Component, OnInit, HostListener  } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  constructor() { }
  search = ''
  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, {
        
      });
    });
  }
  @HostListener("window:scroll")
  scrollEvent() {
    this.isScrolled = window.pageYOffset >= 50;
}


  onWindowScroll() {
   var element = document.querySelector('.nav-wrapper') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }

  searchbox(form:NgForm){
    console.log(form.value)
  }

}
