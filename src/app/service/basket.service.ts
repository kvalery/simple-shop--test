import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs';

@Injectable()
export class BasketService {

  private _selectedGoods: BehaviorSubject<any> = new BehaviorSubject( {} );
  public _selectedGoods$ = this._selectedGoods.asObservable();

  public set selectedGoods( selectedGoods: {} ){
    this._selectedGoods.next( selectedGoods );
  };

  public get selectedGoods() {
    return this._selectedGoods.getValue();
  };

  public addSelectedGoods( ean: number, newGood: {} ){

    let goods = this.selectedGoods;

    if ( !goods[ean] ) {

      goods[ean] = {};
      goods[ean]['quantity'] = 1;
      goods[ean]['product'] = newGood;

    } else {

      goods[ean]['quantity'] =  ++goods[ean]['quantity'] ;

    }

    this.selectedGoods = goods;

  };

  constructor() { }

}
