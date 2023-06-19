import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomePageComponent } from './home-page/home-page.component';

import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { NewshomeComponent } from './newshome/newshome.component';
import { TodaysWeatherComponent } from './todays-weather/todays-weather.component';
import { TravelBuddyComponent } from './travel-buddy/travel-buddy.component';
import { ForecastFutureComponent } from './forecast-future/forecast-future.component';




const routes: Routes = [
  {path:'aboutUs',component:AboutUsComponent},
  {path:'contactUs',component:ContactUsComponent},
  
  {path:'',component:HomePageComponent},
  {path:'home',component:HomePageComponent},
  
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'news',component:NewshomeComponent},
  {path:'todayweather',component:TodaysWeatherComponent},
  {path:'travelbuddy',component:TravelBuddyComponent},
  {path:'forecastfuture',component:ForecastFutureComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
