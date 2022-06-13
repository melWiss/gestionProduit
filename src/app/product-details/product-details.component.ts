import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Produit } from '../model/produit';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

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

  constructor(private route: ActivatedRoute) { }
  id?: number;
  product?: Produit;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +(params.get('id') ?? 0);
      this.product = this._products.find((p)=>p.id == this.id);
    });
  }

}
