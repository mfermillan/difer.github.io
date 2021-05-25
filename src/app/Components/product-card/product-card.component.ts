import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit, AfterViewInit {
  @Input() product: any;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
  }

  handleAddToCart(){
    this.productService.addToCart(this.product);
    //console.log(this.productService.getCart());
  }
}
