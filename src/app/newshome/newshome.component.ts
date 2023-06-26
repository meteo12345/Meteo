// import { Component, OnInit } from '@angular/core';
// import { NewsData } from '../model/News';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

// @Component({
//   selector: 'app-newshome',
//   templateUrl: './newshome.component.html',
//   styleUrls: ['./newshome.component.css']
// })
// export class NewshomeComponent implements OnInit {

  
//   newsData: NewsData[] = [];
//   constructor(private http:HttpClient) {

//   }

//   //newsData?:NewsData;
//   ngOnInit(): void {
  
  
//     const url = 'https://weather338.p.rapidapi.com/news/list?offset=0&limit=3';
// const headers = new HttpHeaders({
//   'X-RapidAPI-Key': 'f593f34300msh46e9948d3b15787p1391fajsn062e88b5273e',
//   'X-RapidAPI-Host': 'weather338.p.rapidapi.com'
// });

// try {
//   this.http.get(url, { headers }).subscribe(
//     (response) => {
//       this.processNewsData(response);
//     },
//     (error) => {
//       console.error(error);
//     }
//   );
// } catch (error) {
//   console.error(error);
// } 
//   }

//   processNewsData(response: any): void {
//     // Assuming the API response is an array of news objects
//     const newsData: any[] = response;
  
//     // Perform any data manipulation or filtering as needed
  
//     // Assign the processed news data to a property in your component
//     this.newsData = newsData;
//   }
 
  
// }
