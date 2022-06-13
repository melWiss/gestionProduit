import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  time?: String = "00:00:00";

  ngOnInit(): void {
    this.resetTime();
    setInterval(()=>{this.resetTime();}, 1000);
  }

  resetTime(){
    let d = new Date();
    this.time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  }

}
