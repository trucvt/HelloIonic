import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MessagePage } from './message/message';
import { DashboardPage } from './dashboard/dashboard';


@Component({
    templateUrl: 'home.html'
})
export class HomePage implements AfterViewInit {
    @ViewChild('dashboard') dashboardPage:DashboardPage;

    public pet:String = "cat";

    ngAfterViewInit() {
        console.log("HomePage - ngAfterViewInit");
        setTimeout(()=>{
            console.log(this.dashboardPage);
        },5000);
    }

    constructor() {
      
    }
}