import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gasolinera } from 'src/app/models/interfaces/gasolinera';
import { GasolineraService } from 'src/app/services/gasolinera.service';

@Component({
  selector: 'app-dialog-gasolinera-detail',
  templateUrl: './dialog-gasolinera-detail.component.html',
  styleUrls: ['./dialog-gasolinera-detail.component.css']
})
export class DialogGasolineraDetailComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) private data: DialogGasolineraDetailComponent, private gasolineraService: GasolineraService) { }

  gasolinera!: Gasolinera;
  
  ngOnInit(): void {
    this.gasolinera = this.data.gasolinera
  }

}
