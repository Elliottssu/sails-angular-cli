import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticleApiService {

	constructor(private http: HttpClient) { }

	//获取文章列表
	getArticle(params: any) {
		return this.http.get('/api/article/getArticle', { params: params }).map((res: any) => res);
	}

}