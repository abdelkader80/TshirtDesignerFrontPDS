import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CatalogueService } from '../catalogue.service';
import {AuthentificationService} from '../services/authentification.service';
import {Produit} from '../model/produit.model';
import {PanierService} from '../services/panier.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  produits: any;
  public editphoto: boolean;
  currentproduct: any;
  fileselected:any;
  progress: any;
  fichiercourant: any;
  title: string;
  constructor(
    public catService: CatalogueService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthentificationService,
    public panierService:PanierService
  ) {}

  ngOnInit(): void {
    let P1 = this.route.snapshot.params.P1;

        if (P1 == 1) {
          this.getProducts('/produits/search/produitenselection');
         
        }
    this.router.events.subscribe((val) => {

      if (val instanceof NavigationEnd) {
        let url = val.url;
        console.log(url);
        let P1 = this.route.snapshot.params.P1;

        if (P1 == 1) {
          this.title="Produits selectionnés";
          this.getProducts('/produits/search/produitenselection');
        } else if (P1 == 2) {
          let idCat = this.route.snapshot.params.P2;
          this.title="Produits par categorie"+idCat;
          this.getProducts('/categories/' + idCat + '/products');
        }else if(P1==3){
          this.title="Produits en promo";
          this.getProducts('/produits/search/produitenpromo');
        }else if(P1==4){
          this.title="Produits disponible en stock";
          this.getProducts('/produits/search/produitdispo');
        }
        else if(P1==4){
          this.title="Recherche ...";
          this.getProducts('/produits/search/produitdispo');
        }
      }
    });
  }
  private getProducts(url) {
    this.catService.getResource(url).subscribe(
      (data) => {
        this.produits = data;
        console.log(data)
        // console.log(this.catService.host+'/photoProduct/'+this.produits[0]._embedded[0].produits[0].id)
        
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onEditPhoto(p){
    this.editphoto=true;
    this.currentproduct=p;
  }
  onSelectedFile(event){
    this.fileselected=event.target.files;
  }
  UploadImage(){
    this.progress=0;
    this.fichiercourant=this.fileselected.item(0);
    this.catService.uploadImageProduct(this.fichiercourant, this.currentproduct.id).subscribe(event=>{
      if(event.type===HttpEventType.UploadProgress){
        this.progress=Math.round(100*event.loaded/event.total);
        console.log(this.progress)
        }
        else if(event instanceof HttpResponse){
          //this.getProducts('/produits/search/produitenselection')
        }
      },err=>{

        alert("problème de téléchargement")

    });

  }

  public timestamp=Date.now();
  getTs(){
    return this.timestamp;
  }
  detailProduit(p:Produit){
    let url=btoa(p._links.produit.href);
    this.router.navigateByUrl("detailproduit/"+url);

  }
  ajouterProduitdansPanier(p:Produit){
    this.panierService.ajouterProduitauPanier(p);


  }
}
