import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutosService } from './produtos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { DesafioComponent } from './desafio/desafio.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    ParentDataComponent,
    DirectivesComponent,
    IfRenderComponent,
    EventosComponent,
    ListRenderComponent,
    DesafioComponent,
    EditarProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProdutosService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
