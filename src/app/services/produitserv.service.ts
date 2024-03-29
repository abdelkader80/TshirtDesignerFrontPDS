import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { categorie } from '../model/categorie';
import { Produit } from '../model/produit';



 

@Injectable({
  providedIn: 'root'
})
export class ProduitservService {
  private host="http://127.0.0.1:8080"
 

  constructor(private http:HttpClient) { }
  
 
  listcategories(){
    return this.http.get(this.host+'/categories');

  }
  getproducts(c){
    return this.http.get(c._links.products.href);

  }
  ajouternouvprod(nouveauprod:Produit): Observable<Object>{
    console.log(nouveauprod);
    return this.http.post<Produit>(`${this.host}/app/addproduit`,nouveauprod);
  }
  listeproduit():Observable<Produit>{
    console.log("abdo");
    return this.http.get<Produit>(this.host+"/app/listproduit");

  }
  
  listcat():Observable<categorie[]>{
    return this.http.get<categorie[]>(this.host+"/app/listcat")
  }
  supprimerprod(id: number): Observable<Object>{

    return this.http.delete(this.host+"/app/listproduit/"+id)
  }
  public Updateprod1(id: number): Observable<Produit> {
  
    return this.http.get<Produit>(this.host+"produits/"+id);
  }
  public Updateprod2(id: number, produit: Produit): Observable<Produit> {
    
    return this.http.put<Produit>("http://127.0.0.1:8090/employees/"+id, produit);
  }
  
  public UploadImage(file ,id){
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<Produit>(environment.host+'/app/uploadphoto/'+id, formData);
    
  }

}
