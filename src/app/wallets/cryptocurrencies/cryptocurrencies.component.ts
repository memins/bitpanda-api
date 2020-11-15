import { Component, OnInit } from '@angular/core';
import { CryptocoinAttributes } from 'src/app/shared/models/cryptocoins.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-cryptocurrencies',
  templateUrl: './cryptocurrencies.component.html',
  styleUrls: ['./cryptocurrencies.component.scss'],
})
export class CryptocurrenciesComponent implements OnInit {
  cryptocoinsData: Array<CryptocoinAttributes>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getDatafromAPICryptocoins();
  }

  getDatafromAPICryptocoins() {
    this.apiService.getDatafromApi().subscribe((api) => {
      this.cryptocoinsData = api.data.attributes.cryptocoins.map(
        (cryptocoins) => cryptocoins.attributes
      );
    });
  }
}
