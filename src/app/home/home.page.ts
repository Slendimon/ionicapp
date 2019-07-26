import { Component } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public alertCtrl: AlertController, public loadCtrl: LoadingController,
     public toastCtrl: ToastController) {

  }
  async openPage(){
    const alert = await this.alertCtrl.create({
      header: 'Viajes',
      message: 'Tienes 3 viajes',
      buttons: ['ok'],
    });
    await alert.present();
  }
  async loadPage(){
    const loading = await this.loadCtrl.create({
      message: 'Contactanos en fb',
      spinner: 'crescent',
      duration: 2000
    });
    await loading.present();
  }
  async openToast(){
    const toast = await this.toastCtrl.create({
      message: 'Ubicanos en Av. Bolognesi #304',
      duration: 2000
    });
    await toast.present();
  }
}
