import { Component, OnInit } from '@angular/core';
import { FilasService } from '../filas.service';

@Component({
  selector: 'app-criar-fila',
  templateUrl: './criar-fila.component.html',
  styleUrls: ['./criar-fila.component.scss']
})
export class CriarFilaComponent implements OnInit {

  nomeFila: string;

  constructor(private fila: FilasService) { }

  ngOnInit() {
  }

  adicionarFila(){
    console.log('Nome: ', this.nomeFila);
    this.fila.adicionaFila({id: this.fila.nextId(), nome: this.nomeFila});
    // this.filas.push({
    //   id: this.idFila, nome: this.nomeFila
    // });
    // console.log('Cliquei');
  }
}
