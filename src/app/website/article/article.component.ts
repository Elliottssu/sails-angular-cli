import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleApiService, SharedService } from '../../_services';

@Component({
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})

export class ArticleComponent implements OnInit {

  public id: string = ''; //文章id

  constructor(private articleApiService: ArticleApiService, private activatedRoute: ActivatedRoute, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

    })

  }
}