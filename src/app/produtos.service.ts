import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, RequestUpdate, ResponseCreate, ResponseUpdate } from './desafio/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private url = "http://localhost:3000/produtos";

  constructor(private http: HttpClient) { };

  listarProdutos() : Observable<any>{
    return this.http.get(this.url);
  }

  adicionarProduto(request: RequestCreate) : Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request);
  }

  getProduto(id: string): Observable<ResponseUpdate> {
    const _url = `${this.url}/${id}`;

    return this.http.get<ResponseUpdate>(_url);
  };

  updateProduto(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
    const _url = `${this.url}/${id}`;
    return this.http.put<ResponseUpdate>(_url, request);

  };


};
