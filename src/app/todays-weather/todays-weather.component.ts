import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../model/Weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-todays-weather',
  templateUrl: './todays-weather.component.html',
  styleUrls: ['./todays-weather.component.css']
})
export class TodaysWeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) {


  }
  cityName:string='Trivandrum';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName='';

  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName='';
      }

      private getWeatherData(cityName:string){
        this.weatherService.getWeatherData(cityName)
          .subscribe({
            next: (response) => {
    
    
              this.weatherData = response;
              console.log(response)
            }
          });
        }
}
