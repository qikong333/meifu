import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  config = {
    observer: true
  };
  index = 0;
  currentPic = 0;
  constructor() {
    setInterval(() => {
      const id = (this.currentPic + 1) % 3;
      this.currentPic = id;
    }, 3000);
  }

  changebanner(id) {
    console.log(id);
    this.currentPic = id;
  }
  ngOnInit() { }
}
