import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilasComponenteComponent } from './filas-componente.component';

describe('FilasComponenteComponent', () => {
  let component: FilasComponenteComponent;
  let fixture: ComponentFixture<FilasComponenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilasComponenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilasComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
