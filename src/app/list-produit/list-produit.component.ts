import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  imageBaseUrl:String = "http://localhost:8080/api/image/";

  _products?: Array<Produit>;

  products: Array<Produit> = [];

  visible: boolean = true;

  switchVisibility() {
    this.visible = !this.visible;
  }

  getColor(qte: number) {
    return qte == 0 ? "red" : "black";
  }

  _searchQuery?: String;
  set searchQuery(str: String) {
    this._searchQuery = str.toUpperCase();
    this.products = this._products?.filter((v)=>v.nom.toUpperCase().includes(this._searchQuery as string))??[];
  }

  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
    this.produitService.getProduits().subscribe(data => {
      this._products = data;
      this.products = data;
    });
  }

}
