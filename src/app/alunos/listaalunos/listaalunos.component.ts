import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/core/model';

@Component({
  selector: 'app-listaalunos',
  templateUrl: './listaalunos.component.html',
  styleUrls: ['./listaalunos.component.scss']
})
export class ListaalunosComponent implements OnInit {
  alunos: Aluno[] = [
    {id: 1, nomealuno: 'Pedro'},
    {id: 2, nomealuno: 'Arthur'},
    {id: 3, nomealuno: 'Luiz Felipe'},
    {id: 4, nomealuno: 'Victor'}
  ];
  displayedColumns: string[] = ['id', 'nomealuno'];

  constructor() { }

  ngOnInit(): void {
  }

}
