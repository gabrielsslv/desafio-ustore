import { RequestUpdate } from '../desafio/produto.model';
import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
  id: any;
  request!: RequestUpdate;

  constructor(private ProdutosService: ProdutosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.ProdutosService.getProduto(this.id).subscribe(res => {
      this.request = {
        nome: `${res.data.id} ${res.data.nome}`,
        preco: 0,
        validade: new Date,
      }
    });
  }

  atualizar(){
    this.ProdutosService.updateProduto(this.id, this.request).subscribe(res => {
      alert("ok")
    })
  }

}
