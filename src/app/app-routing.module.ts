import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import {DetailproduitComponent} from './detailproduit/detailproduit.component';
import {PanierComponent} from './panier/panier.component';
import {ProdPersonaliseComponent} from './prod-personalise/prod-personalise.component';
import {CompersComponent} from './compers/compers.component';

const routes: Routes = [
  {path:'products/:P1/:P2' ,component:ProductsComponent},
  {path:'' ,redirectTo:'products/1/0',pathMatch:'full'},
  {path:'login' ,component:LoginComponent},
  {path:'detailproduit/:url' ,component:DetailproduitComponent},
  {path:'panier' ,component:PanierComponent},
  {path:'prodpers' ,component:ProdPersonaliseComponent},
  {path:'compers' ,component:CompersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
