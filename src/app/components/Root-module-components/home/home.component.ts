import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  array: string[] = ["assets/Images/batman.jpg", "assets/Images/side.jpg", "assets/Images/gojo.jpg", "assets/Images/cowboy.jpg"];

  constructor() { }

  ngOnInit(): void {
  }

}
