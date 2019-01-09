import { Response } from '@angular/http';
import { TeaService } from '../services/tea.service';
import Tea from '../models/tea.model';
import { Component, OnInit } from '@angular/core';
// import { exists } from 'fs';
// import { async } from 'q';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private teaService: TeaService) {}

  teasList: Tea[];
  kindsList: string[] = [];
  kindSelection: string;
  ngOnInit() {
    this.teaService.getTeas()
    .subscribe(teas => {
      this.teasList = teas;
      console.log(teas);
    })

    this.teaService.getTeas()
    .subscribe(teas => {
      for(let tea of teas) {
        if(!this.kindsList.includes(tea.kind)){
          this.kindsList.push(tea.kind);
        }
      }
      console.log(this.kindsList);
    })
  
  
  }

}