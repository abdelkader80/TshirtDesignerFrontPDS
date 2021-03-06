import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Produit} from './model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  public host:string ="http://localhost:8080";


  constructor(private http:HttpClient) { }
  public getResource(url):Observable<object>{
    return this.http.get(this.host+url);

  }
  public getProduct(url):Observable<Produit>{
    return this.http.get<Produit>(url);

  }
  public uploadImageProduct(file: File, idProduct): Observable<HttpEvent<{}>>{
    let formdata: FormData=new FormData();
    formdata.append('file', file);
    const req=new HttpRequest('POST', this.host+'/uploadphoto/'+idProduct, formdata, {
      reportProgress: true,
      responseType: 'text'

    });
    return this.http.request(req);

  }
}
