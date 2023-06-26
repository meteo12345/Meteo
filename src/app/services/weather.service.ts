import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { NewsData } from '../model/News';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { WeatherData } from '../model/Weather.model';
import { Travel } from '../model/Astronomy.model';
import { Root } from '../model/forecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // getNews():Observable<NewsData>{
  //   return this.http.get<NewsData>(environment.newsApiUrl,{
  //     headers:new HttpHeaders()
  //     .set(environment.XRapidAPIHostHeaderName3,environment.XRapidAPIHostHeaderValue3)
  //     .set(environment.XRapidAPIKeyHeaderName3,environment.XRapidAPIKeyHeaderValue3)
  //   })
  // }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const headers = new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName, environment.XRapidAPIHostHeaderValue)
      .set(environment.XRapidAPIKeyHeaderName, environment.XRapidAPIKeyHeaderValue); // Replace 'YOUR_WEATHER_API_KEY' with your actual API key

    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json');

    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers,
      params
    });


  }


  getForecastData(cityName: string): Observable<Root> {
      const headers = new HttpHeaders()
        .set(environment.XRapidAPIHostHeaderName1, environment.XRapidAPIHostHeaderValue1)
        .set(environment.XRapidAPIKeyHeaderName1, environment.XRapidAPIKeyHeaderValue1); // Replace 'YOUR_WEATHER_API_KEY' with your actual API key

      const params = new HttpParams()
        .set('q', cityName)
        .set('units', 'metric')
        .set('mode', 'json');

      return this.http.get<Root>(environment.weatherApiBaseUrl1, {
        headers,
        params
      });

  }



  getAstronomyData(cityName: string): Observable<Travel> {
    const headers = new HttpHeaders()
      .set(environment.XRapidAPIHostHeaderName1, environment.XRapidAPIHostHeaderValue1)
      .set(environment.XRapidAPIKeyHeaderName1, environment.XRapidAPIKeyHeaderValue1)
      .set(environment.XRapidAPIKeyHeaderName2, environment.XRapidAPIKeyHeaderValue2)
      ; // Replace 'YOUR_WEATHER_API_KEY' with your actual API key

    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json');

    return this.http.get<Travel>(environment.weatherApiBaseUrl2, {
      headers,
      params
    });


}


}



