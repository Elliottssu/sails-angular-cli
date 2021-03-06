import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/combineLatest';

import { SharedService } from './_services'

import '../style/styles.scss';

@Component({
	selector: 'app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

	public routerData: Observable<string>;
	public detailName: Observable<string>;
	public title: Observable<string>;
	public message: any = { } //消息弹窗

	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private titleService: Title,
		private sharedService: SharedService
	) { }

	ngOnInit() {
		//路由事件=>路由定义的data
		this.routerData = this.router.events
			.filter(event => event instanceof NavigationEnd) //过滤路由结束事件
			.map(() => this.activatedRoute)					 //当前激活的路由加入流中
			.map(route => {									 //判断是否还有子路由
				while (route.firstChild) route = route.firstChild;
				return route;
			})
			.filter(route => route.outlet === 'primary')     //过滤出来没有自已名字的路由出口
			.mergeMap(route => route.data)					 //返回定义路由时候的data属性
			.map(data => data.title)						 //返回data的title属性

		this.detailName = this.sharedService.getDetailName();	//具体详情的行业或者商品名称
		this.title = this.detailName.startWith('').combineLatest(this.routerData, (name, title) => { //合并详情页的title和具体详情的行业或者商品名称
			return (name && (title.indexOf('文章') > -1)) ? `${name}-${title}` : title;
		});

		this.title.subscribe(title => {
			this.titleService.setTitle(title);  //设置title
		})

		this.sharedService.getMessage().subscribe(value => {
            this.message = value;
        });
	}
}
