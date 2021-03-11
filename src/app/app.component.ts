import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {CatalogueService} from './catalogue.service';
import {AuthentificationService} from './services/authentification.service';
import {PanierService} from './services/panier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categories: any;
  public currentcategorie;

  constructor(private catService: CatalogueService,
              private router: Router,
              private authService: AuthentificationService,
              public panierService: PanierService
  ) {


  }

  ngOnInit(): void {
    this.authService.loadAutheticatedUserFromLocalStorage();
    this.getCategories();

  }

  private getCategories() {

    this.catService.getResource('/categories').subscribe(data => {
      this.categories = data;
    }, err => {
      console.log(err);
    });

  }

  GetProductByCat(c) {
    this.currentcategorie = c;
    this.router.navigateByUrl('/products/2/' + c.id);

  }

  produitenselection() {
    this.currentcategorie = undefined;
    this.router.navigateByUrl('/products/1/0');
  }

  produitenpromo() {
    this.currentcategorie = undefined;
    this.router.navigateByUrl('/products/3/0');
  }

  produitdispo() {
    this.currentcategorie = undefined;
    this.router.navigateByUrl('/products/4/0');
  }

  onLogout() {
    this.authService.removeUserFromLocalStorage();
    this.router.navigateByUrl('/login')

  }
}
