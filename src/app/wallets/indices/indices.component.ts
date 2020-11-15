import { Component, OnInit } from '@angular/core';
import { IndexAttributes } from 'src/app/shared/models/indexes.interface';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-indices',
  templateUrl: './indices.component.html',
  styleUrls: ['./indices.component.scss'],
})
export class IndicesComponent implements OnInit {
  indexesData: Array<IndexAttributes>;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getDatafromAPICommodity();
  }

  getDatafromAPICommodity() {
    this.apiService.getDatafromApi().subscribe((api) => {
      this.indexesData = api.data.attributes.indexes.map(
        (indexes) => indexes.attributes
      );
    });
  }
}
