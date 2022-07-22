import { Component, OnInit } from '@angular/core';
import { Hotels } from 'src/app/models/hotels.model';
import { HotelsListService } from 'src/app/services/hotels-list.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.scss'],
})
export class HotelsListComponent implements OnInit {
  hotels: Hotels[] = [];
  private _hotelFilter!: string;
  private _numberVoyagers!: string;
  // private _hotelFilterCountry!: string;
  public filteredHotels: Hotels[] = [];
  public errMsg!: string;
  constructor(private hotelsListService: HotelsListService) {}

  ngOnInit(): void {
    this.hotelsListService.getHotels().subscribe({
      next: (hotels) => {
        this.hotels = hotels;
        // this._hotelFilterCountry = '';
        this._hotelFilter = '';
        this._numberVoyagers = '';
        this.filteredHotels = this.hotels;
      },
      error: (err) => (this.errMsg = err),
    });
    console.log(this.filteredHotels);
  }

  public get hotelFilter(): string {
    return this._hotelFilter;
  }

  public get numberVoyagers(): string {
    return this._numberVoyagers;
  }

  // public get hotelFilterCountry(): string {
  //   return this._hotelFilterCountry;
  // }

  public set hotelFilter(filter: string) {
    this._hotelFilter = filter;

    this.filteredHotels = this.hotelFilter
      ? this.filterHotels(this._hotelFilter)
      : this.hotels;
  }

  public set numberVoyagers(filter: string) {
    this._numberVoyagers = filter;
    this.filteredHotels = this.numberVoyagers
      ? this.filterNumberVoyagers(this._numberVoyagers)
      : this.hotels;
  }

  // public set hotelFilterCountry(filter: string) {
  //   this._hotelFilterCountry = filter;
  //   this.filteredHotels = this.hotelFilterCountry
  //     ? this.filterHotelCountry(this._hotelFilterCountry)
  //     : this.hotels;
  // }

  private filterNumberVoyagers(criteria: string): Hotels[] {
    const numberVRes = this.hotels.filter(
      (hotel: Hotels) => hotel.numberPersons.indexOf(criteria) !== -1
    );
    return numberVRes;
  }

  private filterHotels(criteria: string): Hotels[] {
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel: Hotels) =>
        hotel.location.toLocaleLowerCase().indexOf(criteria) !== -1
    );

    return res;
  }

  // private filterHotelCountry(criteria: string): Hotels[] {
  //   criteria = criteria.toLocaleLowerCase();

  //   const resCountry = this.hotels.filter(
  //     (hotel: Hotels) =>
  //       hotel.hotelCountry.toLocaleLowerCase().indexOf(criteria) !== -1
  //   );

  //   return resCountry;
  // }
}
