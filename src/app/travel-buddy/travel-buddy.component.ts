// import { Component, OnInit } from '@angular/core';
// import { WeatherService } from '../services/weather.service';
// import { Travel } from '../model/Astronomy.model';

// @Component({
//   selector: 'app-travel-buddy',
//   templateUrl: './travel-buddy.component.html',
//   styleUrls: ['./travel-buddy.component.css']
// })
// export class TravelBuddyComponent implements OnInit {

//   constructor(private weatherService: WeatherService) {


//   }
//   cityName:string='Trivandrum';
//   travel?: Travel;

//   ngOnInit(): void {
//     this.getAstronomyData(this.cityName);
//     this.cityName='';

//   }


//   onSubmit(){
// this.getAstronomyData(this.cityName);
// this.cityName='';
//   }


//   private getAstronomyData(cityName:string){
//     this.weatherService.getAstronomyData(cityName)
//       .subscribe({
//         next: (response) => {


//           this.travel = response;
//           console.log(response)
//         }
//       });
//     }


// }


