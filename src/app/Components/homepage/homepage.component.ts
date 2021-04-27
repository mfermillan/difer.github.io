import { Component, OnInit, AfterViewInit} from '@angular/core';
import * as M from 'materialize-css'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, AfterViewInit {
  options = { fullWidth: true };
  constructor() { }
  
  ngOnInit(): void {

  }
  ngAfterViewInit(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.carousel');
      var instances = M.Carousel.init(elems, {
        duration:100,
        indicators:true, 
        dist:0,
        fullWidth:true
      });
    });
  }

  

}
