import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'https://api.weather.gov/points/';

  constructor(private http: HttpClient) {}

  getWeatherByLocation(lat: number, long: number) {
    const url = `${this.apiUrl}${lat},${long}/forecast/hourly`;
    return this.http.get(url);
  }
}
