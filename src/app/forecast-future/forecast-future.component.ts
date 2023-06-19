import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Future } from '../model/forecast.model';

@Component({
  selector: 'app-forecast-future',
  templateUrl: './forecast-future.component.html',
  styleUrls: ['./forecast-future.component.css']
})
export class ForecastFutureComponent implements OnInit{

  constructor(private weatherService: WeatherService) {


  }
  cityName:string='Trivandrum';
  futureforecast?: Future;

  ngOnInit(): void {
    this.getForecastData(this.cityName);
    this.cityName='';

  }


  onSubmit(){
this.getForecastData(this.cityName);
this.cityName='';
  }


  private getForecastData(cityName:string){
    this.weatherService.getForecastData(cityName)
      .subscribe({
        next: (response) => {


          this.futureforecast = response;
          console.log(response)
        }
      });
    }

}
