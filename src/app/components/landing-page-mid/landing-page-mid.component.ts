import { Component, Input, OnInit } from '@angular/core';
import { Hotels } from 'src/app/models/hotels.model';
import { HotelsListService } from 'src/app/services/hotels-list.service';

@Component({
  selector: 'app-landing-page-mid',
  templateUrl: './landing-page-mid.component.html',
  styleUrls: ['./landing-page-mid.component.scss'],
})
export class LandingPageMidComponent implements OnInit {
  hotels: Hotels[] = [];
  public errorMsg!: string;
  constructor(private hotelListService: HotelsListService) {}

  ngOnInit(): void {
    this.hotelListService.getSuggestedHotels().subscribe({
      next: (hotels) => (this.hotels = hotels),
      error: (err) => (this.errorMsg = err),
    });
  }
}
