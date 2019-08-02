import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {

  @Input() texto;
  @Input('t-descricao') descricao;

  @Output('b-click') click = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  public clickouNoBotao(){
    this.click.emit('');
  }
}
