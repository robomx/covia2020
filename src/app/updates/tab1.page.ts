import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  table_head = []
  table_data = []
  meta = []

  constructor( private http: HttpClient) {}

  ngOnInit() {
    this.fetchUpdates();
  }

  public AppRef = AppComponent;

  setLang() {
    if (AppComponent.languageToggle) {
      AppComponent.currentLang = 'english';
    } else {
      AppComponent.currentLang = 'hindi';
    }
  }
  
  fetchUpdates() {
    this.http.get(AppComponent.base + 'stats.json').subscribe((res) => {
      this.table_head = res['data']['table'][0]
      this.table_data = res['data']['table'][1]
      this.meta = res['data']['meta']
    });
  }
}
