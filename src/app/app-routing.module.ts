import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HotelSingleViewComponent } from './components/hotel-single-view/hotel-single-view.component';
import { HotelsListComponent } from './components/hotels-list/hotels-list.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: 'hotel/:hotelName', component: HotelSingleViewComponent },
  { path: 'hotels-list', component: HotelsListComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
