import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {

  // products?: Array<Produit>;
  _products: Array<Produit> = [
    {
      id: 1,
      nom: "PC PORTABLE",
      prix: 1500,
      quantite: 5,
      photo: "./assets/images/asus.jpeg",
    },
    {
      id: 2,
      nom: "PC Desktop",
      prix: 1200,
      quantite: 0,
      photo: "./assets/images/gamer.jpg",
    },
    {
      id: 3,
      nom: "PS5",
      prix: 1800,
      quantite: 2,
      photo: "./assets/images/ps5.webp",
    },
  ];

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
    this.products = this._products.filter((v)=>v.nom.toUpperCase().includes(this._searchQuery as string));
  }

  constructor() { }

  ngOnInit(): void {
    this.products = [...this._products];
  }

}
