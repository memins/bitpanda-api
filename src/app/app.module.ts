import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WalletsComponent } from './wallets/wallets.component';
import { PricesComponent } from './prices/prices.component';
import { FiatsComponent } from './wallets/fiats/fiats.component';
import { CryptocurrenciesComponent } from './wallets/cryptocurrencies/cryptocurrencies.component';
import { MetalsComponent } from './wallets/metals/metals.component';
import { IndicesComponent } from './wallets/indices/indices.component';
import { WalletsModule } from './wallets/wallets.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    WalletsComponent,
    PricesComponent,
    FiatsComponent,
    CryptocurrenciesComponent,
    MetalsComponent,
    IndicesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MenubarModule,
    ButtonModule,
    WalletsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
