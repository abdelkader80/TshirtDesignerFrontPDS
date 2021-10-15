import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitservService } from '../services/produitserv.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  public nouvprod=new Produit();
  id:number;

  constructor(
    private prodserv: ProduitservService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.prodserv.Updateprod1(this.id).subscribe(data=>{
      this.nouvprod=data;
  })}
  onSubmit(f:Form){
    this.prodserv.Updateprod2(this.id, this.nouvprod).subscribe(data=>{
      this.router.navigate(['listproduit']);
  }) }

}

