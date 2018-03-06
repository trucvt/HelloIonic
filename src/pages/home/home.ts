import { Component } from '@angular/core';
import { MessagePage } from './message/message';
import { DashboardPage } from './dashboard/dashboard';


@Component({
    templateUrl: 'home.html'
})
export class HomePage {
    dashboardTab = DashboardPage;
    messageTab = MessagePage;
    public pet:String = "cat";
    constructor() {
    }
}