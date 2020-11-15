import { Component, OnInit } from '@angular/core';
import { FiatAttributes } from 'src/app/shared/models/fiat.interface';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-fiats',
  templateUrl: './fiats.component.html',
  styleUrls: ['./fiats.component.scss'],
})
export class FiatsComponent implements OnInit {
  fiatData: Array<FiatAttributes>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getDatafromAPIFiats();
  }

  getDatafromAPIFiats() {
    this.apiService.getDatafromApi().subscribe((api) => {
      this.fiatData = api.data.attributes.fiats.map(
        (fiats) => fiats.attributes
      );
    });
  }
}
