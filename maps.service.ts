import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Location {
  latitude:'string',
  longitude:'string'
}

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getLocation(){
return this.http.get<Location>('https://localhost:4200/;key=AIzaSyAp0hC4rSPc9ccY6ghazpgEsMLmEQyHbwQ')
  }

}
 