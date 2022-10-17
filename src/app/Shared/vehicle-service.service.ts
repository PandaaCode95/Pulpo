import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../Models/vehicles';
@Injectable({
  providedIn: 'root'
})

export class VehicleService {

  public url:string = "http://localhost:3000";
 // public Vehicle!:Vehicle;

  constructor(public http:HttpClient) { }

  // Obtenemos un Vehicle en específico

  getOne(id_vehicle:number):Observable<Object>{
    console.log("Entramos a getOne Vehicle con id: ")
    console.log(id_vehicle)
    this.url="http://localhost:3000/Vehicle?id_Vehicle=" + id_vehicle;
    return this.http.get(this.url);
  }  

  getVehicleSeleccionado(titulo:string):Observable<Object>{
    this.url="http://localhost:3000/Vehicle";
    return this.http.post<string>(this.url,titulo);
  }
  // Obtenemos todos los Vehicles

  getAll():Observable<Object>{
    this.url="http://localhost:3000/Vehicle";
    return this.http.get(this.url);
  }
  
  // Creamos una entrada de Vehicle

  postOne(Vehicle:Vehicle):Observable<Object>{
    this.url="http://localhost:3000/Vehicle";
    return this.http.post<Vehicle>(this.url,Vehicle);
  }

  // Editamos una entrada de Vehicle

  editOne(Vehicle:Vehicle):Observable<Object>{
    this.url="http://localhost:3000/Vehicle";
    return this.http.put<Vehicle>(this.url,Vehicle);
  }

  // Eliminamos una entrada de Vehicle con su id

  deleteOne(id_Vehicle:number):Observable<Object>{
    this.url="http://localhost:3000/Vehicle?id_Vehicle=" + id_Vehicle;
    return this.http.delete(this.url);
  }

  }