import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GasolineraResponse, MunicipioResponse, ProvinciaResponse } from '../interfaces/gasolinera.interface';

@Injectable({
  providedIn: 'root'
})
export class GasolineraService {

  constructor(private http: HttpClient) { }

  getGasolineras(): Observable<GasolineraResponse>{
    return this.http.get<GasolineraResponse>(`https://raw.githubusercontent.com/Ale061202/GasApp/main/GasApp/raw-data/response.json`);
  }
  getProvincias(): Observable<ProvinciaResponse[]>{
    return this.http.get<ProvinciaResponse[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/Provincias/`)
  }
  getMunicipios(id:string[]):Observable<MunicipioResponse[]>{
    return this.http.get<MunicipioResponse[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${id}`)
  }
}
