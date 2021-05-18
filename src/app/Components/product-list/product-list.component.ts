import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  constructor(public productService: ProductsService  ) { }

  ngOnInit(): void {
      
   this.getProducts();
  }
  ngAfterViewInit(){
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  }
  getProducts(){
    this.productService.getProducts().subscribe(
      res => {
        this.productService.products = res;
        console.log(res)
      },
      err => console.log(err)
    )
  }

}
