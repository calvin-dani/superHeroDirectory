import { HeroBioTemplate } from '../../../dataModels/herobioTemplate';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';




@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.css']
})




export class HeroBioComponent implements OnInit {

  notfound: boolean = true;
  invalid: boolean = true;
  makeVisible: boolean = false;

  heroName: string = '';

  heroModalData: HeroBioTemplate = {
    name: '',
    fullname: '',
    aliases: [],
    "place-of-birth": '',
    alignment: '',
    base: '',
    image: '',
    powerstats: {
      intelligence: '',
      strength: '',
      speed: '',
      durability: '',
      power: '',
      combat: ''
    },
    gender: '',
    height: '',
    weight: '',
    race: '',
    occupation: '',
    relatives: '',
  };


  constructor() { }

  ngOnInit(): void {
  }

  handleNotfound(booleanData: string) {
    if ("false" == booleanData) {
      this.notfound = false;
      console.log("Hero found:", booleanData);
    }
    else {
      this.notfound = true;
    }
  }

  handleInvalidInput(booleanData: string) {
    if ("false" == booleanData) {
      this.invalid = false;
      console.log("Valid Data :", booleanData);
    }
    else {
      this.invalid = true;
    }
  }

  handleOnClick(data: any) {
    data = data ?? "data not recieved"
    console.log("emit", data);
    this.heroModalData = data;
    this.makeVisible = true;
  }

  handleResetVisibilty(data: string) {
    if (data) {
      this.makeVisible = false;
    }
  }




}
