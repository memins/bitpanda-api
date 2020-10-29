import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/services/api.service';
import { Attributes } from './shared/models/api.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'bitpanda-api';

  constructor(private apiService: ApiService) {}

  ngOnInit() {}
}
