import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bitpanda-api';
  apiData;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getDatafromApi().subscribe((data) => {
      this.apiData = data;
      console.log(data);
    });
  }
}
