import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import 'rxjs';

@Injectable()
export class DataService {

  private _data: BehaviorSubject<any> = new BehaviorSubject( {} );
  public _data$ = this._data.asObservable();

  public set data( data: any ){
    this._data.next( data );
  };

  public get data() {
    return this._data.getValue();
  };

  public getData () {

    this.http.get("app/data")
      .map( response => response.json().data )
      .subscribe(
        data => this.data = data,
        error => console.log(error)
      );

  }

  constructor(
    private http: Http
  ) { };


}
