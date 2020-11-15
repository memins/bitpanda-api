import { Component, OnInit } from '@angular/core';
import { CommodityAttributes } from 'src/app/shared/models/commodities.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-metals',
  templateUrl: './metals.component.html',
  styleUrls: ['./metals.component.scss'],
})
export class MetalsComponent implements OnInit {
  commodityData: Array<CommodityAttributes>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getDatafromAPICommodity();
  }

  getDatafromAPICommodity() {
    this.apiService.getDatafromApi().subscribe((api) => {
      this.commodityData = api.data.attributes.commodities.map(
        (commodity) => commodity.attributes
      );
    });
  }
}
