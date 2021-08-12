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
];

export const req1Data = [
   {"coord":{"lon":27.0923,"lat":38.4622},"weather":[{"id":802,"main":"Clouds","description":"scattered clouds","icon":"03d"}],"base":"stations","main":{"temp":30.73,"feels_like":30.85,"temp_min":30.73,"temp_max":30.73,"pressure":1008,"humidity":42},"visibility":10000,"wind":{"speed":8.23,"deg":330},"clouds":{"all":40},"dt":1624193575,"sys":{"type":1,"id":6977,"country":"TR","sunrise":1624157260,"sunset":1624210722},"timezone":10800,"id":311044,"name":"İzmir","cod":200}
];
export const req2Data = [
   {"coord":{"lon":4.8897,"lat":52.374},"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"base":"stations","main":{"temp":20.93,"feels_like":20.98,"temp_min":17.7,"temp_max":24.5,"pressure":1008,"humidity":73},"visibility":10000,"wind":{"speed":1.34,"deg":232,"gust":2.68},"clouds":{"all":20},"dt":1624193503,"sys":{"type":2,"id":2005807,"country":"NL","sunrise":1624159073,"sunset":1624219568},"timezone":7200,"id":2759794,"name":"Amsterdam","cod":200}
];