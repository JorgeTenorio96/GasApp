import { Component, OnInit } from '@angular/core';
import { Gasolinera } from 'src/app/interfaces/gasolinera.interface';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-lista-gasolineras',
  templateUrl: './lista-gasolineras.component.html',
  styleUrls: ['./lista-gasolineras.component.css']
})
export class ListaGasolinerasComponent implements OnInit {

  listaGasolinera: Gasolinera[] = []

  constructor(private gasolineraService: GasolineraService) { }

  ngOnInit(): void {
  }

  getListaGasolinera(){
    this.gasolineraService.getGasolineras().subscribe(res =>{
      this.listaGasolinera = res.ListaEESSPrecio;
    })
  }
}
