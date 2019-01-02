import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-by-type',
  templateUrl: './by-type.component.html',
  styleUrls: ['./by-type.component.scss']
})
export class ByTypeComponent implements OnInit {
  @Input() kindSelection;
  @Input() teasList;
  constructor() { }

  ngOnInit() {
  }

}
