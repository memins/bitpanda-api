import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Attributes, ApiInterface } from '../../shared/models/api.interface';

@Component({
  selector: 'app-fiats',
  templateUrl: './fiats.component.html',
  styleUrls: ['./fiats.component.scss'],
})
export class FiatsComponent implements OnInit {
  apiData: ApiInterface[];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getDatafromAPI();
    console.log('👉 ', this.getDatafromAPI());
    console.log(this.apiData);
  }

  getDatafromAPI() {
    this.apiService.getDatafromApi().subscribe((data) => {
      this.apiData = data;
      console.log('👋 ', data);
    });
  }
}
