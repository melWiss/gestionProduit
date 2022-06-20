import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private baseUrl:String = "http://localhost:8080/api";

  produits?:Produit[];

  constructor(private http:HttpClient) { }

  public getProduits():Observable<Produit[]> {
    return this.http.get<Produit[]>(this.baseUrl+"/produits");
  }

  public getProduit(id:number): Observable<Produit>{
    return this.http.get<Produit>(this.baseUrl+"/produits/"+id);
  }


}
