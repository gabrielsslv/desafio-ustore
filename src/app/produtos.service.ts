import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, ResponseCreate } from './desafio/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private url = "http://localhost:3000/produtos"

  constructor(private http: HttpClient) { }

  listarProdutos() : Observable<any>{
    return this.http.get(this.url);
  }

  criarProduto(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request);
  }
}
