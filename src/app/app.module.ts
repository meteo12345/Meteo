import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';

import { MatButtonModule } from '@angular/material/button';

import { MatMenuModule } from '@angular/material/menu';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutUsComponent } from './about-us/about-us.component';

import { ContactUsComponent } from './contact-us/contact-us.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { NewshomeComponent } from './newshome/newshome.component';
import { TodaysWeatherComponent } from './todays-weather/todays-weather.component';
import { TravelBuddyComponent } from './travel-buddy/travel-buddy.component';
import { ForecastFutureComponent } from './forecast-future/forecast-future.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
 
    ContactUsComponent,
    
    LoginComponent,
    RegisterComponent,
    NewshomeComponent,
    TodaysWeatherComponent,
    TravelBuddyComponent,
    ForecastFutureComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatButtonModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
