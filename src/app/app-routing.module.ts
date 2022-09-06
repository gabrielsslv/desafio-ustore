import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { DesafioComponent } from './desafio/desafio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'desafio', component: DesafioComponent},
  {path: 'produtos/editar/:id', component: EditarProdutoComponent},
  {path: 'produtos/editar', component: EditarProdutoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
