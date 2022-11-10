import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gasolinera, GasolineraResponse } from '../interfaces/gasolinera.interface';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient) { }

  getGasolineras(): Observable<GasolineraResponse>{
    return this.http.get<GasolineraResponse>(`https://raw.githubusercontent.com/JorgeTenorio96/GasApp/main/raw%20data/response.json`);

  }
}
