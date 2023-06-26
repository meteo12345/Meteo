import { Component, OnInit } from '@angular/core';
import { WeatherData } from '../model/Weather.model';
import { WeatherService } from '../services/weather.service';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-todays-weather',
  templateUrl: './todays-weather.component.html',
  styleUrls: ['./todays-weather.component.css']
})
export class TodaysWeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService,private favoritesService:FavoritesService) {


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

        addToFavorites(location: string): void {
          this.favoritesService.addToFavorites(location);
        }
        
        
}
