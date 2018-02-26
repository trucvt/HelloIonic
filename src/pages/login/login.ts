import { Component } from '@angular/core';
import { ToastController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage/dist/storage';

@Component({
    templateUrl: 'login.html'
})
export class LoginPage{
    public userName:String;
    public passWord:String;
    constructor(private toastCtrl: ToastController,private platform: Platform, private storage: Storage){
        storage.get('UserName').then((val) => {
            this.userName = !val ? "" : val;
            storage.get("Password").then((passVal)=>{
                this.passWord = !passVal ? "" : passVal;
            });
        });
    }
    validateLogin(){
        if(!this.userName){
            let toast = this.toastCtrl.create({
                message: 'UserName',
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }

        if(!this.passWord){
            let toast = this.toastCtrl.create({
                message: 'Password',
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
           
        this.storage.set('UserName', this.userName);
        this.storage.set('Password', this.passWord);
        
    }
    exitApp(){
        this.platform.exitApp();
    }
}