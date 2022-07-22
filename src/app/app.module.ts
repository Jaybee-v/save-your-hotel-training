import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HotelsListComponent } from './components/hotels-list/hotels-list.component';
import { LandingPageMidComponent } from './components/landing-page-mid/landing-page-mid.component';
import { LandingPageHotelsSuggestComponent } from './components/landing-page-hotels-suggest/landing-page-hotels-suggest.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HotelSingleViewComponent } from './components/hotel-single-view/hotel-single-view.component';
import { HotelsListModelComponent } from './components/hotels-list-model/hotels-list-model.component';
import { StarRatingComponent } from './shared/star-rating/star-rating.component';
import { FormsModule } from '@angular/forms';
import { HotelSingleViewServicesComponent } from './components/hotel-single-view-services/hotel-single-view-services.component';
import { HotelSingleViewPricesComponent } from './components/hotel-single-view-prices/hotel-single-view-prices.component';
import { FooterComponent } from './components/footer/footer.component';

registerLocaleData(localFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    HotelsListComponent,
    LandingPageMidComponent,
    LandingPageHotelsSuggestComponent,
    AboutUsComponent,
    HotelSingleViewComponent,
    HotelsListModelComponent,
    StarRatingComponent,
    HotelSingleViewServicesComponent,
    HotelSingleViewPricesComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
