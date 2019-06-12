import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/feed.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed-three',
  templateUrl: './feed-three.component.html',
  styleUrls: ['./feed-three.component.css']
})
export class FeedThreeComponent implements OnInit {

  feedIsEnabled:boolean = true;
  feed: Feed[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get<Feed[]>("http://localhost:8080/skynews-feeds")
    .subscribe(feeds =>{
      this.feed = feeds;
    })
  }

  toggleFeed(){
    this.feedIsEnabled = !this.feedIsEnabled;
  }
  
}
