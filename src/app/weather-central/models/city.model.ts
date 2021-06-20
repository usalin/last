export interface City {
   id: number;
   name: string;
   countryName: string;
}
export interface CityWeatherData {
   temp: number;
   feels_like: number;
   temp_min: number;
   temp_max: number;
   pressure: number;
   humidity: number;
   speed: number;
   deg: number;
   id: number;
   main: string;
   description: string;
   icon: string;
   cityName: string;
}
export interface Coord {
   lon: number;
   lat: number;
}
export interface Weather {
   id: number;
   main: string;
   description: string;
   icon: string;
}
export interface Main {
   temp: number;
   feels_like: number;
   temp_min: number;
   temp_max: number;
   pressure: number;
   humidity: number;
}
export interface Wind {
   speed: number;
   deg: number;
}
export interface Clouds {
   all: number;
}
export interface Sys {
   type: number;
   id: number;
   country: string;
   sunrise: number;
   sunset: number;
}
export interface WeatherDataObject {
   coord: Coord;
   weather: Weather[];
   base: string;
   main: Main;
   visibility: number;
   wind: Wind;
   clouds: Clouds;
   dt: number;
   sys: Sys;
   timezone: number;
   id: number;
   name: string;
   cod: number;
}
export const Cities = [
   { id: 1, name: "Izmir", countryName: "Turkey" },
   { id: 2, name: "Amsterdam", countryName: "Netherlands" },
   { id: 3, name: "Milan", countryName: "Italy" },
   { id: 4, name: "Stockholm", countryName: "Sweden" },
   { id: 5, name: "Prague", countryName: "Czechia" }
]
export const CityNames = ["Izmir", "Amsterdam", "Milan", "Prague", "Stockholm"];

export const cityDetailData = [
{cod: "200" },
{city: {id: 311044, name: "İzmir", coord: {lat: 38.4622, lon: 27.0923}, country: "TR", population: 3731863}},
{cnt: 40},
{cod: "200"},
{list: [{dt: 1624190400}, {dt: 1624201200}, {dt: 1624212000}, {dt: 1624222800}, {dt: 1624233600}]},
{message: 0}
]