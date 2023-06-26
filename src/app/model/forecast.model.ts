// export interface Future{
//     location: Location
//     current: Current
//     forecast: Forecast
//   }
  
  
//   export interface Location {
//     name: string
//     region: string
//     country: string
//     lat: number
//     lon: number
//     tz_id: string
//     localtime_epoch: number
//     localtime: string
//   }
  
  
//   export interface Current {
//     last_updated_epoch: number
//     last_updated: string
//     temp_c: number
//     temp_f: number
//     is_day: number
//     condition: Condition
//     wind_mph: number
//     wind_kph: number
//     wind_degree: number
//     wind_dir: string
//     pressure_mb: number
//     pressure_in: number
//     precip_mm: number
//     precip_in: number
//     humidity: number
//     cloud: number
//     feelslike_c: number
//     feelslike_f: number
//     vis_km: number
//     vis_miles: number
//     uv: number
//     gust_mph: number
//     gust_kph: number
//   }
  
  
//   export interface Condition {
//     text: string
//     icon: string
//     code: number
//   }
  
  
//   export interface Forecast {
//     forecastday: Forecastday[]
  
//   }
  
  
//   export interface Forecastday {
//     date: string
//     date_epoch: number
//     day: Day
//     astro: Astro
//     hour: Hour[]
//   }
  
  
//   export interface Day {
//     maxtemp_c: number
//     maxtemp_f: number
//     mintemp_c: number
//     mintemp_f: number
//     avgtemp_c: number
//     avgtemp_f: number
//     maxwind_mph: number
//     maxwind_kph: number
//     totalprecip_mm: number
//     totalprecip_in: number
//     totalsnow_cm: number
//     avgvis_km: number
//     avgvis_miles: number
//     avghumidity: number
//     daily_will_it_rain: number
//     daily_chance_of_rain: number
//     daily_will_it_snow: number
//     daily_chance_of_snow: number
//     condition: Condition2
//     uv: number
//   }
  
  
//   export interface Condition2 {
//     text: string
//     icon: string
//     code: number
//   }
  
  
//   export interface Astro {
//     sunrise: string
//     sunset: string
//     moonrise: string
//     moonset: string
//     moon_phase: string
//     moon_illumination: string
//     is_moon_up: number
//     is_sun_up: number
//   }
  
  
//   export interface Hour {
//     time_epoch: number
//     time: string
//     temp_c: number
//     temp_f: number
//     is_day: number
//     condition: Condition3
//     wind_mph: number
//     wind_kph: number
//     wind_degree: number
//     wind_dir: string
//     pressure_mb: number
//     pressure_in: number
//     precip_mm: number
//     precip_in: number
//     humidity: number
//     cloud: number
//     feelslike_c: number
//     feelslike_f: number
//     windchill_c: number
//     windchill_f: number
//     heatindex_c: number
//     heatindex_f: number
//     dewpoint_c: number
//     dewpoint_f: number
//     will_it_rain: number
//     chance_of_rain: number
//     will_it_snow: number
//     chance_of_snow: number
//     vis_km: number
//     vis_miles: number
//     gust_mph: number
//     gust_kph: number
//     uv: number
//   }
  
  
//   export interface Condition3 {
//     text: string
//     icon: string
//     code: number
//   }
export interface Root{
future:Future
daum:Daum
weath:Weather
  }
export interface Future {
  
  data: Daum[]
  lon: number
  country_code: string
  timezone: string
  lat: number
  city_name: string
  state_code: string
}

export interface Daum {
  wind_gust_spd: number
  weather: Weather
  temp: number
  app_temp: number
  dni: number
  wind_cdir: string
  rh: number
  pod: string
  timestamp_local: string
  snow_depth: number
  clouds: number
  vis: number
  wind_spd: number
  wind_cdir_full: string
  slp: number
  datetime: string
  ts: number
  dewpt: number
  uv: number
  wind_dir: number
  ghi: number
  dhi: number
  precip: number
  ozone: number
  clouds_hi: number
  clouds_low: number
  clouds_mid: number
  snow: number
  solar_rad: number
  pres: number
  pop: number
  timestamp_utc: string
}

export interface Weather {
  description: string
  code: number
  icon: string
}
