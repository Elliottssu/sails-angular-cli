import { Component, OnInit, HostListener } from '@angular/core';
import { SharedService } from '../_services';


@Component({
    templateUrl: './website.component.html',
    styleUrls: ['./website.component.scss']
})

export class WebsiteComponent implements OnInit {

    public isMenuVisable: any; //是否是about页面，来显示导航状态
    public isScrollTop: boolean = false; //是否回到顶部
    public isNavShow: boolean = false; //是否显示移动端的汉堡包
    constructor(private sharedService: SharedService) {

    }

    ngOnInit() {
        this.sharedService.getMenuState().subscribe(value => {
            this.isMenuVisable = value;
        });

    }

    // @HostListener("window:scroll", ['$event'])
    // onWindowScroll(event) {
    //     let scrollTop = event.path[1].pageYOffset;
    //     this.isScrollTop = scrollTop > 99 ? true : false;
    // }


    //回到顶部
    public scrollTop(top) {
        if (top) {
            let scrollTopNumber = document.body.scrollTop;
            let timeClear = setInterval(function () {
                scrollTopNumber = scrollTopNumber - 100;
                if (scrollTopNumber < 0) {
                    clearInterval(timeClear);
                    document.body.scrollTop = 0;
                } else {
                    document.body.scrollTop = scrollTopNumber;
                }
            }, 10);
        }
    }






}