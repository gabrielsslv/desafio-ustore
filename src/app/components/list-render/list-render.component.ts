import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  nomes = [
    {nome: 'teste'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
