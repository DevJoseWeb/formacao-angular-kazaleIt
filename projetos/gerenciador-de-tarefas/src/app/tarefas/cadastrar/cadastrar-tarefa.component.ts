import { Component, OnInit } from '@angular/core';
import { TarefaService } from '../shared';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

  constructor(private tarefaService : TarefaService) { }

  ngOnInit() {
  }

}
