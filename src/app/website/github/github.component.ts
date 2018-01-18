import { Component, OnInit, HostListener } from '@angular/core';
import { ArticleApiService } from '../../_services';

@Component({
	templateUrl: './github.component.html',
	styleUrls: ['./github.component.scss']
})

export class GithubComponent implements OnInit {


	public articleList: Array<object> = []; //文章列表
	public isLoading: boolean = false; //加载中状态


	constructor(private articleApiService: ArticleApiService) {

	}

	ngOnInit() {

	}

	//文章列表
	public getArticle(pageNum: number) {
		this.isLoading = true
		this.articleApiService.getArticle({ pageNum: pageNum }).subscribe(res => {
			this.isLoading = false
			if (res.code == 1) {
				this.articleList = res.data
			}
		})
	}



}