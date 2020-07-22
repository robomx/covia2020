import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-barometer',
  templateUrl: './barometer.page.html',
  styleUrls: ['./barometer.page.scss'],
})
export class BarometerPage implements OnInit {

  public AppRef = AppComponent;

  url;
  loaded = false;

  constructor(
    private router: Router,
    public sanitizer: DomSanitizer,
  ) {
    this.url = this.getSantizedURL();
  }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['/tabs']);
  }

  getSantizedURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://covid.preflet.com/' + AppComponent.currentLang + '/report?country=India&embed=true&code=C01COVIA');
  }
}
