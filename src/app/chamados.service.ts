import { Injectable } from '@angular/core';
import { Chamado } from './model/chamado';

@Injectable({
  providedIn: 'root'
})
export class ChamadosService {
  chamados: Chamado[] = [
    {
      id: 1001, 
      idFila: 1, 
      descricao: 'Teste 1', 
      status: "aberto", 
      dataAbertura: '2019-07-25', 
      dataFechamento: null, 
      descricaoFinalizacao: null
    },
    {
      id: 1108, 
      idFila: 2, 
      descricao: 'Teste 2', 
      status: "aberto", 
      dataAbertura: '2019-05-31', 
      dataFechamento: '2019-06-08', 
      descricaoFinalizacao: 'nada nada'
    },
    {
      id: 2005, 
      idFila: 2, 
      descricao: 'Teste 3', 
      status: "fechado", 
      dataAbertura: '2019-04-15', 
      dataFechamento: '2019-05-10', 
      descricaoFinalizacao: 'nada nada nada'
    },
    {
      id: 1002, 
      idFila: 2, 
      descricao: 'Teste 1', 
      status: "aberto", 
      dataAbertura: '2019-07-25', 
      dataFechamento: null, 
      descricaoFinalizacao: null
    },
    {
      id: 1103, 
      idFila: 2, 
      descricao: 'Teste 2', 
      status: "aberto", 
      dataAbertura: '2019-05-31', 
      dataFechamento: '2019-06-08', 
      descricaoFinalizacao: 'nada nada'
    },
    {
      id: 2006, 
      idFila: 2, 
      descricao: 'Teste 3', 
      status: "fechado", 
      dataAbertura: '2019-04-15', 
      dataFechamento: '2019-05-10', 
      descricaoFinalizacao: 'nada nada nada'
    },
    {
      id: 1009, 
      idFila: 1, 
      descricao: 'Teste 1', 
      status: "aberto", 
      dataAbertura: '2019-07-25', 
      dataFechamento: null, 
      descricaoFinalizacao: null
    },
    {
      id: 1104, 
      idFila: 2, 
      descricao: 'Teste 2', 
      status: "aberto", 
      dataAbertura: '2019-05-31', 
      dataFechamento: '2019-06-08', 
      descricaoFinalizacao: 'nada nada'
    },
    {
      id: 2000, 
      idFila: 2, 
      descricao: 'Teste 3', 
      status: "aberto", 
      dataAbertura: '2019-04-15', 
      dataFechamento: '2019-05-10', 
      descricaoFinalizacao: 'nada nada nada'
    },
    {
      id: 1036, 
      idFila: 1, 
      descricao: 'Teste 1', 
      status: "aberto", 
      dataAbertura: '2019-07-25', 
      dataFechamento: null, 
      descricaoFinalizacao: null
    },
    {
      id: 1156, 
      idFila: 2, 
      descricao: 'Teste 2', 
      status: "aberto", 
      dataAbertura: '2019-05-31', 
      dataFechamento: '2019-06-08', 
      descricaoFinalizacao: 'nada nada'
    },
    {
      id: 2047, 
      idFila: 2, 
      descricao: 'Teste 3', 
      status: "fechado", 
      dataAbertura: '2019-04-15', 
      dataFechamento: '2019-05-10', 
      descricaoFinalizacao: 'nada nada nada'
    },
    {
      id: 1045, 
      idFila: 1, 
      descricao: 'Teste 1', 
      status: "aberto", 
      dataAbertura: '2019-07-25', 
      dataFechamento: null, 
      descricaoFinalizacao: null
    },
    {
      id: 1198, 
      idFila: 2, 
      descricao: 'Teste 2', 
      status: "fechado", 
      dataAbertura: '2019-05-31', 
      dataFechamento: '2019-06-08', 
      descricaoFinalizacao: 'nada nada'
    },
    {
      id: 2036, 
      idFila: 2, 
      descricao: 'Teste 3', 
      status: "aberto", 
      dataAbertura: '2019-04-15', 
      dataFechamento: '2019-05-10', 
      descricaoFinalizacao: 'nada nada nada'
    },
    {
      id: 1077, 
      idFila: 1, 
      descricao: 'Teste 1', 
      status: "aberto", 
      dataAbertura: '2019-07-25', 
      dataFechamento: null, 
      descricaoFinalizacao: null
    },
    {
      id: 1188, 
      idFila: 2, 
      descricao: 'Teste 2', 
      status: "fechado", 
      dataAbertura: '2019-05-31', 
      dataFechamento: '2019-06-08', 
      descricaoFinalizacao: 'nada nada'
    },
    {
      id: 2099, 
      idFila: 2, 
      descricao: 'Teste 3', 
      status: "aberto", 
      dataAbertura: '2019-04-15', 
      dataFechamento: '2019-05-10', 
      descricaoFinalizacao: 'nada nada nada'
    },

  ];

  constructor() { }

  public getChamados(id_fila: number): Chamado[] {
    return this.chamados.filter( (item) => item.idFila === id_fila);
  }

  public getChamadosId(id_fila: number): Chamado {
    return this.chamados.find((item) => item.id === id_fila);
  }

  public adicionaFila(itemChamado: Chamado): void{
    this.chamados.push(itemChamado);
  }

  nextId(): number{
    let id: number;
    id = this.chamados.length + 1;
    return id;
  }

}
