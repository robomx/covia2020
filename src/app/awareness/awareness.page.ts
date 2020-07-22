import { BrowserService } from './../browser.service';
import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UtilityService } from '../utility.service';

@Component({
  selector: 'app-awareness',
  templateUrl: './awareness.page.html',
  styleUrls: ['./awareness.page.scss'],
})
export class AwarenessPage implements OnInit {

  hindi = []
  english = []
  activated: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private browser: BrowserService,
    private utility: UtilityService
  ) {
    this.activated = "hindi";
  }

  ngOnInit() {
    this.fetchData()
  }


  info() {
    this.router.navigate(['/tabs/info'])
  }

  loadLink(link) {
    this.browser.openLink(link);
  }

  fetchData() {
    this.http.get(AppComponent.base + 'awareness.json').subscribe((res) => {
        this.hindi = Object.values(res).map(data => {
          return data['hindi']
        })
        this.english = Object.values(res).map(data => {
          return data['eng']
        })
    }, (error) => {
      this.utility.presentToast('Error loading data!')
    });
  }
  openHindi(){
    let hindi = document.getElementById('hindi');
    let english = document.getElementById('english');
    hindi.style.display = "block";
    english.style.display = "none";
  }
  openEng(){
    let hindi = document.getElementById('hindi');
    let english = document.getElementById('english');
    hindi.style.display = "none";
    english.style.display = "block";
  }
}
