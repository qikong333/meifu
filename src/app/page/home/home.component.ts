import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../service/http.service';
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
  banners;
  news;
  constructor(
    public http: HttpService,
  ) {
    setInterval(() => {
      const id = (this.currentPic + 1) % 3;
      this.currentPic = id;
    }, 3000);
  }

  changebanner(id) {
    console.log(id);
    this.currentPic = id;
  }
  ngOnInit() {
    this.bannerGet();
    this.newGet();
  }


  bannerGet() {
    this.http.get('/bannerGet')
      .subscribe(r => {
        this.banners = r['data'];
      });
  }

  newGet() {
    this.http.get('/newGet')
      .subscribe(r => {
        this.news = r['data'];
      });
  }
}



