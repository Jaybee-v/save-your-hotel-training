import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hotels } from 'src/app/models/hotels.model';
import { HotelsListService } from 'src/app/services/hotels-list.service';

@Component({
  selector: 'app-hotel-single-view-services',
  templateUrl: './hotel-single-view-services.component.html',
  styleUrls: ['./hotel-single-view-services.component.scss'],
})
export class HotelSingleViewServicesComponent implements OnInit {
  public hotel!: any;
  public hotelServices = [];
  constructor(
    private _route: ActivatedRoute,
    private hotelListService: HotelsListService
  ) {}

  ngOnInit(): void {
    const name = this._route.snapshot.params['hotelName'];

    this.hotelListService.getHotels().subscribe((selectedHotel: Hotels[]) => {
      this.hotel = selectedHotel.find((hotel) => hotel.hotelName == name);

      this.hotelServices = this.hotel.services!.split(',');
    });

    console.log(this.hotelServices);
  }
}
