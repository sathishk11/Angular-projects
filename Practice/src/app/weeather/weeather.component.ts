import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weeather',
  templateUrl: './weeather.component.html',
  styleUrls: ['./weeather.component.css']
})
export class WeeatherComponent {
  location = 'Seattle, WA';
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeatherByLocation(47.6062, -122.3321).subscribe((data: any) => {
      this.weather = data;
    });
  }
}
