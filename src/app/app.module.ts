import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { PanierComponent } from './panier/panier.component';
import { ProdPersonaliseComponent } from './prod-personalise/prod-personalise.component';
import { CompersComponent } from './compers/compers.component';
import { ListproduitComponent } from './listproduit/listproduit.component';
import { CreateproduitComponent } from './createproduit/createproduit.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AllproductComponent } from './allproduct/allproduct.component';
import { MagasinComponent } from './magasin/magasin.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    LoginComponent,
    DetailproduitComponent,
    PanierComponent,
    ProdPersonaliseComponent,
    CompersComponent,
    ListproduitComponent,
    CreateproduitComponent,
    UpdateproductComponent,
    AllproductComponent,
    MagasinComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
