import { Component, OnInit } from '@angular/core';
import {BasketService} from "../../service/basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  public selectedGoods: any;

  constructor(
    public basketService: BasketService,
  ) { }

  ngOnInit() {
    this.basketService._selectedGoods$.subscribe(
      (goods: any ) => {
        this.selectedGoods = goods ;
      }
    );

  }

}
