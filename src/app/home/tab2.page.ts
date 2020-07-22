import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserService } from '../browser.service';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  public AppRef = AppComponent;

  constructor(
    private router: Router,
    public br: BrowserService,
    public toastController: ToastController
  ) {
  }

  async ngOnInit() {
    window['isUpdateAvailable']
      .then(async(isAvailable) => {
        if (isAvailable) {
          const toast = await this.toastController.create({
            message: 'New Update available! ',
            position: 'bottom',
            showCloseButton: true,
            closeButtonText: "Refresh",
          });
          toast.present()
      
          const dismiss = await toast.onDidDismiss();
          if(dismiss.role === 'cancel') {
            window.location.reload()
          }
        }
      });
  }

  map() {
    this.router.navigate(['/map']);
  }

  barometer() {
    this.router.navigate(['/barometer']);
  }

  questionSection(){
    this.router.navigate(['/questions']);
  }
}
