import { Component } from '@angular/core';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
activated: any;
  constructor() {
    this.activated = "sym";
  }

  
  public AppRef = AppComponent;

  setLang() {
    if (AppComponent.languageToggle) {
      AppComponent.currentLang = 'english';
    } else {
      AppComponent.currentLang = 'hindi';
    }
  }
  symChange() {
    let sym = document.getElementById('symptoms');
    let pre = document.getElementById('precaution');
    sym.style.display = "block";
    pre.style.display = "none";
  }
  preChange(){
     let sym = document.getElementById('symptoms');
    let pre = document.getElementById('precaution');
     let info = document.getElementById('info');
    sym.style.display = "none";
    pre.style.display = "block";
     info.style.display = "block";
  }
}
