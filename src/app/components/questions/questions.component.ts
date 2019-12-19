import { Component, OnInit, Input } from '@angular/core';
import { question } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  @Input() questions: question[]=[];
  constructor() { }

  ngOnInit() {}

}
