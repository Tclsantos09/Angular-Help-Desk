import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-chamado2',
  templateUrl: './criar-chamado2.component.html',
  styleUrls: ['./criar-chamado2.component.scss']
})
export class CriarChamado2Component implements OnInit {

  chamadoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  numberPattern = /^[0-9]*$/
  
  ngOnInit() {
    this.chamadoForm = this.formBuilder.group({
      id: this.formBuilder.control('', [
        Validators.pattern(this.numberPattern)
      ]),
      descricao: this.formBuilder.control('', [
        Validators.required, 
        Validators.minLength(5),
        Validators.maxLength(20),
      ])
    });
  }

  public salvar(): void{
    console.log(this.chamadoForm);
  }
}
