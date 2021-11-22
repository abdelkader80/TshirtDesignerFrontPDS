import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Produit } from '../model/produit';
import { ProduitservService } from '../services/produitserv.service';

@Component({
  selector: 'app-magasin',
  templateUrl: './magasin.component.html',
  styleUrls: ['./magasin.component.css']
})
export class MagasinComponent implements OnInit {
  public cat;
  public produits;
  public currentcat;
  constructor(private produitservice: ProduitservService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.produitservice.listcategories()
    .subscribe(data=>{
      this.cat=data;


    },err=>{
      console.log(err);
    })
  }
  onGetproducts(c){
    this.currentcat=c;
    this.produitservice.getproducts(c)
    .subscribe(data=>{
      console.log(data);
      this.produits=data;
    },err=>{
      console.log(err);
    })
  }
  getphotonom(id){
    return environment.host+'/app/photoProduct/'+id;

  }
  detailProduit(p:Produit){
    let url=btoa(p._links.produit.href);
    this.router.navigateByUrl("detailproduit/"+url);

  }

}
