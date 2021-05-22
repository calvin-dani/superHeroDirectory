import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroBioTemplate } from 'src/app/dataModels/herobioTemplate';

@Component({
  selector: 'app-hero-bio-m',
  templateUrl: './hero-bio-m.component.html',
  styleUrls: ['./hero-bio-m.component.css']
})
export class HeroBioMComponent implements OnInit {


  @Input() isVisible: boolean = false;

  @Input() heroModal: HeroBioTemplate = {
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

  @Output() modalResetVisibilty = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
    this.modalResetVisibilty.emit('false');
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.modalResetVisibilty.emit('false');
  }



}
