import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { CotizarComponent } from './Components/cotizar/cotizar.component';
import { LandingComponent } from './Components/landing/landing.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { CotizacionComponent } from './Components/cotizacion/cotizacion.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { ProductCardComponent } from './Components/product-card/product-card.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

import {ProductsService} from './Services/products.service';
import { TarjetaCarritoComponent } from './Components/tarjeta-carrito/tarjeta-carrito.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductosComponent,
    CotizarComponent,
    LandingComponent,
    ProductPageComponent,
    CotizacionComponent,
    HomepageComponent,
    ProductCardComponent,
    ProductListComponent,
    TarjetaCarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
