import { Component, ViewChild } from '@angular/core';
import { LoadingController, Nav,AlertController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';

@Component({
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user : User;

  constructor(public loadingCtrl: LoadingController,public _navg: Nav, public alertCtrl: AlertController) {
    this.user = new User("","");
  }

  

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000,
      dismissOnPageChange:true
    });

    let alert = this.alertCtrl.create({
      title: 'Failed!',
      subTitle: 'The username/password is incorrect. Try again.',
      buttons: ['OK']
    });
    

   if(this.user.UserName == "Admin" && this.user.Password == "password")
{
    loader.present();
    loader.onDidDismiss(() => {
        console.log('Dismissed loading');
        this._navg.setRoot(DashboardPage);
    });
}
else{
alert.present();
}
    
  }
}

 class User{
  UserName:string;
  Password : string;

  constructor(name: string, password: string){
this.UserName=name;
this.Password = password;
  }
}
