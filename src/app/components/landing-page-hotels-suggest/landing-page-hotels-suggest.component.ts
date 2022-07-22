import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotels } from 'src/app/models/hotels.model';

@Component({
  selector: 'app-landing-page-hotels-suggest',
  templateUrl: './landing-page-hotels-suggest.component.html',
  styleUrls: ['./landing-page-hotels-suggest.component.scss'],
})
export class LandingPageHotelsSuggestComponent implements OnInit {
  @Input() hotel!: Hotels;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  public selectedHotel() {
    this._router.navigateByUrl(`/hotel/${this.hotel.hotelName}`);
  }
}
