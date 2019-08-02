import { Component, OnInit } from '@angular/core';
import { ChamadosService } from '../chamados.service';
import { ActivatedRoute } from '@angular/router';
import { Chamado } from '../model/chamado';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalhe-chamado',
  templateUrl: './detalhe-chamado.component.html',
  styleUrls: ['./detalhe-chamado.component.scss']
})
export class DetalheChamadoComponent implements OnInit {

  dadosDoChamado: Chamado;

  constructor(private route: ActivatedRoute,
    private chamados: ChamadosService,
    private location: Location) { }

  ngOnInit() {
    this.route.snapshot.params['id'];
    this.leiaDetalhes();
  }

  public leiaDetalhes(){
    let id_chamado = this.route.snapshot.params['id'];
    this.dadosDoChamado = this.chamados.getChamadosId(+id_chamado);
  }

  public voltar(){
    this.location.back();
  }

}
