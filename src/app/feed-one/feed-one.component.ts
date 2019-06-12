import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/feed.model';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-feed-one',
  templateUrl: './feed-one.component.html',
  styleUrls: ['./feed-one.component.css']
})
export class FeedOneComponent implements OnInit {

  feedIsEnabled:boolean = true;
  feed: Feed[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get<Feed[]>("http://localhost:8080/nyt-feeds")
    .subscribe(feeds =>{
      this.feed = feeds;
    })
  }

  toggleFeed(){
    this.feedIsEnabled = !this.feedIsEnabled;
  }

}
