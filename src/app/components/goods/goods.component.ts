import {Component, Input, OnInit} from '@angular/core';
import {BasketService} from "../../service/basket.service";

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  public addToBascet( good: any ){
    let goodEan = good.ean
    this.basketService.addSelectedGoods( goodEan, good )
  }

  constructor(
    public basketService: BasketService,
  ) { }

  @Input()
  public goods: any;

  @Input()
  public viewType?: boolean = false;

  ngOnInit() {

  }

}
