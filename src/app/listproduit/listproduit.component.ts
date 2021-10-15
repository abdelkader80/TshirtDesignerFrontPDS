import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitservService } from '../services/produitserv.service';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {

  produits:Produit;


  constructor(private produitservService: ProduitservService,
    private route:Router) { }

  ngOnInit(): void {
  }
  getproduct(){
    this.produitservService.listeproduit().subscribe(data=>{
      this.produits=data;
    })

  }
  deleteproduit(id: number){
    
    this.produitservService.supprimerprod(id).subscribe(data=>{
      alert('Element'+ id +'supprimé');
      this.getproduct();
    })
  }
  modifierproduit(id: number){
    this.route.navigate(['modifierproduit',id]);
  }
  

}
