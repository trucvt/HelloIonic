import { Component, AfterViewInit, Input } from "@angular/core";

@Component({
    templateUrl: 'dashboard.html',
    selector:"dashboard"
})
export class DashboardPage implements AfterViewInit{
    public name:String = "TrucVT";
    private count:number = 0;
    // @Input() parent: any;
    ngAfterViewInit() {
        // console.log(this.parent);
        console.log("ngAfterViewInit");
        this.runTimeout();
    }

    constructor(){
        this.name = "VL";
    }

    runTimeout(){
        setTimeout(()=>{   
            this.count ++;
            this.name += this.count.toString();
            this.runTimeout();
       },3000);
    }
}