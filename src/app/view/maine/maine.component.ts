import { Component, OnInit } from '@angular/core';
import {DataService} from "../../service/data.service";

@Component({
  selector: 'app-maine',
  templateUrl: './maine.component.html',
  styleUrls: ['./maine.component.scss']
})
export class MaineComponent implements OnInit {

  public goodsCollection: any;
  public typeOfView: boolean = false;

  public chengView = function () {
    this.typeOfView = !this.typeOfView;
  };

  constructor(
    public dataService: DataService,
  ) { }

  ngOnInit() {

    this.dataService.getData();

    this.dataService._data$.subscribe(

      (data: any ) => {
        this.goodsCollection = data ;
      }

    );

  }

}
