import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilasComponenteComponent } from './filas-componente/filas-componente.component';
import { CriarFilaComponent } from './criar-fila/criar-fila.component';
import { AppRoutingModule } from './app-routing.module';
import { SobreComponent } from './sobre/sobre.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HeaderComponent } from './header/header.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { DetalheChamadoComponent } from './detalhe-chamado/detalhe-chamado.component';
import { BotaoComponent } from './botao/botao.component';
import { CriarChamadoComponent } from './criar-chamado/criar-chamado.component';
import { CriarChamado2Component } from './criar-chamado2/criar-chamado2.component';

@NgModule({
  declarations: [
    AppComponent,
    FilasComponenteComponent,
    CriarFilaComponent,
    SobreComponent,
    NotfoundComponent,
    HeaderComponent,
    ChamadosComponent,
    DetalheChamadoComponent,
    BotaoComponent,
    CriarChamadoComponent,
    CriarChamado2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
