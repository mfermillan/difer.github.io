import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { ProductosComponent } from './Components/productos/productos.component';
import { CotizarComponent } from './Components/cotizar/cotizar.component';
import { LandingComponent } from './Components/landing/landing.component';
import { ProductPageComponent } from './Components/product-page/product-page.component';
import { CotizacionComponent } from './Components/cotizacion/cotizacion.component';
import { HomepageComponent } from './Components/homepage/homepage.component'

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
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
