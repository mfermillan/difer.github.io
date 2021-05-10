import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { LandingComponent } from './Components/landing/landing.component';
import { ProductListComponent } from './Components/product-list/product-list.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: '', component: HomepageComponent},
  {path: 'productos', component: ProductListComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
