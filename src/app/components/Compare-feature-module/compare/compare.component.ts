import { Component, OnInit } from '@angular/core';
import { HeroBioTemplate } from 'src/app/dataModels/herobioTemplate';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  compareFlag: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  

}
