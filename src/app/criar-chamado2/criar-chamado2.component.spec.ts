import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarChamado2Component } from './criar-chamado2.component';

describe('CriarChamado2Component', () => {
  let component: CriarChamado2Component;
  let fixture: ComponentFixture<CriarChamado2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarChamado2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarChamado2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
