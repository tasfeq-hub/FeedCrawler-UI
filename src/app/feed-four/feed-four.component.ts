import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/feed.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed-four',
  templateUrl: './feed-four.component.html',
  styleUrls: ['./feed-four.component.css']
})
export class FeedFourComponent implements OnInit {

  feedIsEnabled:boolean = true;
  feed: Feed[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get<Feed[]>("http://localhost:8080/ssports-feeds")
    .subscribe(feeds =>{
      this.feed = feeds;
    })
  }

  toggleFeed(){
    this.feedIsEnabled = !this.feedIsEnabled;
  }

}
