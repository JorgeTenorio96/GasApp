import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GasolineraResponse, Municipio, Provincia } from '../models/interfaces/gasolinera';


@Injectable({
  providedIn: 'root'
})
export class GasolineraService {



  constructor(private http: HttpClient) { }

  getGasolinera(): Observable<any> {
    return this.http.get<any>('https://raw.githubusercontent.com/Ale061202/GasApp/main/GasApp/raw-data/response.json');
  }

  getProvincias():Observable<Provincia[]>{
    return this.http.get<Provincia[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/Provincias/`)
  }

  getMunicipios(id:string[]):Observable<Municipio[]>{
    return this.http.get<Municipio[]>(`https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/Listados/MunicipiosPorProvincia/${id}`)
  }


  parseAnyToGasolineraResponse(jsonString: string) {

    let jsonStringReplaced = jsonString.replace(/Precio Gasoleo A/gi, 'precioGasoleoA');
    jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasolina 95 E5/gi,'precioGasolina95E5')
    jsonStringReplaced = jsonStringReplaced.replace(/Precio Gasolina 98 E5/gi,'precioGasolina98E5')
    jsonStringReplaced = jsonStringReplaced.replace(/ListaEESSPrecio/gi, 'listaEESSPrecio');
    jsonStringReplaced = jsonStringReplaced.replace(/Provincia/gi, 'provincia');
    jsonStringReplaced = jsonStringReplaced.replace(/Localidad/gi, 'localidad');
    jsonStringReplaced = jsonStringReplaced.replace(/Municipio/gi, 'municipio');
    jsonStringReplaced = jsonStringReplaced.replace(/Dirección/gi, 'direccion');
    jsonStringReplaced = jsonStringReplaced.replace(/Horario/gi, 'horario');
    jsonStringReplaced = jsonStringReplaced.replace(/C\.P\./gi, 'cP');
    jsonStringReplaced = jsonStringReplaced.replace(/Rótulo/gi, 'rotulo');
    jsonStringReplaced = jsonStringReplaced.replace(/IDProvincia/gi, 'idProvincia');

    let jsonFinal: GasolineraResponse = JSON.parse(jsonStringReplaced);

    return jsonFinal.listaEESSPrecio;
  }
}


