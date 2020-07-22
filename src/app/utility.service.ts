import { Injectable, Component } from '@angular/core';
import { ToastController, ModalController } from '@ionic/angular';
import { ModalPage } from './modal/modal.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(
    private toast: ToastController,
    public modalController: ModalController,
    private geolocation: Geolocation) { }

  async presentToast(message) {
    const t = await this.toast.create({
      message: message,
      duration: 3000
    });

    t.present();
  }

  async presentModal(props) {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: props
    });
    return await modal.present().then((e) => {
    }).catch((e) => {
    });
  }

}
