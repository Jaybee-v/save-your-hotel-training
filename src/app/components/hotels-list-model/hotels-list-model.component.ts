import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hotels } from 'src/app/models/hotels.model';

@Component({
  selector: 'app-hotels-list-model',
  templateUrl: './hotels-list-model.component.html',
  styleUrls: ['./hotels-list-model.component.scss'],
})
export class HotelsListModelComponent implements OnInit {
  @Input() hotel!: Hotels;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  public selectedHotel() {
    this._router.navigateByUrl(`/hotel/${this.hotel.hotelName}`);
  }
}
