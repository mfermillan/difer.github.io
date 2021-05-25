import { Component, Input,OnInit } from '@angular/core';
import { ProductsService } from '../../Services/products.service';
@Component({
  selector: 'app-tarjeta-carrito',
  templateUrl: './tarjeta-carrito.component.html',
  styleUrls: ['./tarjeta-carrito.component.css']
})
export class TarjetaCarritoComponent implements OnInit {
  @Input() product: any;
  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
  }
  addToCart(){
    this.productService.addToCart(this.product);
  }
}
