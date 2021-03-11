import { Injectable } from '@angular/core';
import {Panier} from '../model/panier.model';
import {Produit} from '../model/produit.model';
import {ProductItem} from '../model/productitem.model';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  PanierCourantname:string="Panier1";
  private paniers:Map<string,Panier>=new Map();

  constructor() {
    let panier=new Panier(this.PanierCourantname);
    this.paniers.set(this.PanierCourantname,panier);
  }
  public ajouterProduitauPanier(produit:Produit){
    let Panier=this.paniers.get(this.PanierCourantname)
    let productItem:ProductItem=Panier.items.get(produit.id)
    if(productItem){
      productItem.quantite+=produit.quantite;
    }
    else{
      productItem=new ProductItem();
      productItem.price=produit.currentprice;
      productItem.quantite=produit.quantite;
      productItem.product=produit;
      Panier.items.set(produit.id,productItem);

    }
  }
  getPanierEnCours():Panier{
    return this.paniers.get(this.PanierCourantname);
  }
}
