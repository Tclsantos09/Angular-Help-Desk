import { Component, OnInit } from '@angular/core';
import { ChamadosService } from '../chamados.service';
import { FilasService } from '../filas.service';
import { Fila } from '../model/fila';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-criar-chamado',
  templateUrl: './criar-chamado.component.html',
  styleUrls: ['./criar-chamado.component.scss']
})
export class CriarChamadoComponent implements OnInit {

  descricao: string;
  idFila: number;

  constructor(private chamado: ChamadosService,
    private fila: FilasService,
    private location: Location) {}

  ngOnInit() {
  }

  public lerFila(): Fila[]{
    return this.fila.getFilas();
  }

  criarChamado(){
    this.chamado.adicionaFila({id: this.chamado.nextId(), 
      idFila: +this.idFila,
      descricao: this.descricao,
      status: 'aberto',
      dataAbertura: moment().format('L'),
      dataFechamento: null,
      descricaoFinalizacao: null
   });
   alert('Chamado criado');
  }

  public voltar(){
    this.location.back();
  }

}
