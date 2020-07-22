import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  image = [];

  constructor(private http: HttpClient) { }

  public AppRef = AppComponent;

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get(AppComponent.base + 'updates.json').subscribe((res) => {
      if(res['status']) {
        this.image = res['data'];
      }
    }, (error) => {
    });
  }
}
