import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotels } from 'src/app/models/hotels.model';
import { HotelsListService } from 'src/app/services/hotels-list.service';

@Component({
  selector: 'app-hotel-single-view',
  templateUrl: './hotel-single-view.component.html',
  styleUrls: ['./hotel-single-view.component.scss'],
})
export class HotelSingleViewComponent implements OnInit {
  public hotel!: any;
  constructor(
    private hotelListService: HotelsListService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const name = this._route.snapshot.params['hotelName'];

    this.hotelListService.getHotels().subscribe((selectedHotel: Hotels[]) => {
      this.hotel = selectedHotel.find((hotel) => hotel.hotelName == name);
    });
  }
}
