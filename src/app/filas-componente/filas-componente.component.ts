import { Component, OnInit } from '@angular/core';
import { FilasService } from '../filas.service';

@Component({
  selector: 'app-filas-componente',
  templateUrl: './filas-componente.component.html',
  styleUrls: ['./filas-componente.component.scss']
})
export class FilasComponenteComponent implements OnInit {

  constructor(private filas: FilasService) { 
  }

  ngOnInit() {
  }

  public leiaDaFila(){
    return this.filas.getFilas();
  }

  public incluiNaFila():void {
    alert('Incluiu');
  }

  public deletaNaFila():void {
    alert('Deletou');
  }

  public nada():void {
    alert('nada');
  }
}
