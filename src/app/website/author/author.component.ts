import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ArticleApiService, SharedService } from '../../_services';

@Component({
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})

export class AuthorComponent implements OnInit {

  public id: string = ''; //作者id

  constructor(private articleApiService: ArticleApiService, private activatedRoute: ActivatedRoute, private router: Router, private sharedService: SharedService) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];

    })

  }
}