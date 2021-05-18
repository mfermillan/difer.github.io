import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, AfterViewInit {
  @Input() product: any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    
  }
}
