import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CatalogueService} from '../catalogue.service';
import {Produit} from '../model/produit.model';
import {AuthentificationService} from '../services/authentification.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
   currentProduct: Produit;
   mode=0;
  timestamp=Date.now();
  private editPhoto: boolean;
  fileselected:any;
  progress: any;
  fichiercourant: any;

  constructor(private router:Router, private route:ActivatedRoute,
              private detailservice: CatalogueService,
              private authService:AuthentificationService) { }

  ngOnInit(): void {
    let url=atob(this.route.snapshot.params.url);
    console.log(url);
    this.detailservice.getProduct(url).subscribe(data=>{
      this.currentProduct=data;
      console.log("la valeur de la retour est TEST");
    })
  }
  onEditPhoto(p){
    this.editPhoto=true;
    this.currentProduct=p;
  }
  onSelectedFile(event){
    this.fileselected=event.target.files;
  }
  UploadImage(){
    this.progress=0;
    this.fichiercourant=this.fileselected.item(0);
    this.detailservice.uploadImageProduct(this.fichiercourant, this.currentProduct.id).subscribe(event=>{
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

  getTS(){
    return this.timestamp;
  }


  onEditProduct() {
    this.mode=1;

  }
  ajouterProduitdansPanier(p){

  }

  onUpdateProduct(value: any) {

  }
}
