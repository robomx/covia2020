import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    private router: Router,
    private modalCtrl: ModalController) { }

  percent;
  score;
  heart_class;
  form;

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss();
  }

  home() {
    this.router.navigate(['/tabs']);
  }

  public AppRef = AppComponent;

  setLang() {
    if (AppComponent.languageToggle) {
      AppComponent.currentLang = 'english';
    } else {
      AppComponent.currentLang = 'hindi';
    }
  }
}
