import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotels } from 'src/app/models/hotels.model';
import { HotelsListService } from 'src/app/services/hotels-list.service';

@Component({
  selector: 'app-hotel-single-view-prices',
  templateUrl: './hotel-single-view-prices.component.html',
  styleUrls: ['./hotel-single-view-prices.component.scss'],
})
export class HotelSingleViewPricesComponent implements OnInit {
  public hotel!: any;
  public startPrice!: number;
  public _pensionChoice!: number;
  public days!: number;
  constructor(
    private _route: ActivatedRoute,
    public hotelListService: HotelsListService
  ) {}

  ngOnInit(): void {
    const name = this._route.snapshot.params['hotelName'];
    this.hotelListService.getHotels().subscribe((selectedHotel: Hotels[]) => {
      this.hotel = selectedHotel.find((hotel) => hotel.hotelName == name);
      this.pensionChoice = this.hotel.pricePerNight;
      this.days = 1;
      this.startPrice = this.pensionChoice;
      // this.startPrice = this.newPrice(this.pensionChoice);
    });
  }

  public get pensionChoice(): number {
    return this._pensionChoice;
  }

  public set pensionChoice(filter: number) {
    this._pensionChoice = filter;

    this.startPrice = this.pensionChoice
      ? this.newPrice(this._pensionChoice)
      : this.startPrice;
  }

  public newPrice(criteria: number) {
    return (this.startPrice = criteria);
  }

  public acceptPaiment() {
    const change = { freeRooms: this.hotel.freeRooms - 1 };
    return this.hotelListService
      .putHotelFreeRooms(change)
      .subscribe((data) => (this.hotel = data.hotelName));
  }
}
