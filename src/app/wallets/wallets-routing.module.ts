import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { FiatsComponent } from './fiats/fiats.component';
import { CryptocurrenciesComponent } from './cryptocurrencies/cryptocurrencies.component';
import { MetalsComponent } from './metals/metals.component';
import { IndicesComponent } from './indices/indices.component';
import { WalletsComponent } from './wallets.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'fiats',
      },
      { path: 'fiats', component: FiatsComponent },
      { path: 'cryptocurrencies', component: CryptocurrenciesComponent },
      { path: 'metals', component: MetalsComponent },
      { path: 'indices', component: IndicesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletsRoutingModule {}
