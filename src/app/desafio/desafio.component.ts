import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { RequestCreate } from './produto.model';

@Component({
  selector: 'app-desafio',
  templateUrl: './desafio.component.html',
  styleUrls: ['./desafio.component.css']
})
export class DesafioComponent implements OnInit {

  produtos: Array<any> = new Array();
  request: RequestCreate = {
    id: 0,
    nome: '',
    preco: 0,
    createdAt:  new Date,
    updatedAt: new Date
  }

  constructor(private ProdutosService: ProdutosService) { }

  ngOnInit() {
    this.listarProdutos();
  }

  listarProdutos(){
    this.ProdutosService.listarProdutos().subscribe(produtos => {
      this.produtos = produtos;
    }, err => {
      console.log('Erro ao listar produtos', err)
    });
  };

}
