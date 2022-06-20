import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Produit } from '../model/produit';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private baseImgUrl: String = "http://localhost:8080/api/image/";


  constructor(private route: ActivatedRoute, private produitService: ProduitService) { }
  id?: number;
  product?: Produit;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +(params.get('id') ?? 0);
      this.produitService.getProduit(this.id).subscribe(data => {
        data.photo = this.baseImgUrl + "" + data.id;
        this.product = data;
      });
    });
  }

}
