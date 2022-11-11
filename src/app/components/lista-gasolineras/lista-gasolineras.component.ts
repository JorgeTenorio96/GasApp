import { Component, OnInit } from '@angular/core';
import { Gasolinera, MunicipioResponse, ProvinciaResponse } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-lista-gasolineras',
  templateUrl: './lista-gasolineras.component.html',
  styleUrls: ['./lista-gasolineras.component.css']
})
export class ListaGasolinerasComponent implements OnInit {

  listaGasolinera: Gasolinera[] = [];
  listaGasolinerasFull: Gasolinera[] = [];
  listaProvincias: ProvinciaResponse[] = [];
  listaMunicipios: MunicipioResponse[] = [];
  provinciaArray!: string[];
  mostrar!: boolean;

  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
    this.getListaGasolinera();
    this.filtrarProvincia();
    this.gasolineraService.getProvincias().subscribe(resp =>{
      this.listaProvincias = resp
      console.log(this.listaProvincias);
    })
  }

  getListaGasolinera(){
    this.gasolineraService.getGasolineras().subscribe(res =>{
      this.listaGasolinera = res.ListaEESSPrecio;
    })
  }
  filtrarProvincia(){
    this.listaGasolinera = this.listaGasolinerasFull
    if (this.listaGasolinera.length > 0){
      let listaProvincias: Gasolinera[] = this.listaGasolinera.filter(provincia => this.provinciaArray.includes(provincia.IDProvincia))
      this.listaGasolinera = listaProvincias;

    }else{
      this.gasolineraService.getGasolineras();
    }

  }
  quitarFiltro(){
    this.listaGasolinera = this.listaGasolinerasFull;
  }
  getMunicipiosById(){
    this.mostrar = true
    this.gasolineraService.getMunicipios(this.provinciaArray).subscribe(municipios => {
      this.listaMunicipios = municipios
      console.log(municipios)
    })
  }

}
