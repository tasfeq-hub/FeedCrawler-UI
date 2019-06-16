import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/feed.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed-six',
  templateUrl: './feed-six.component.html',
  styleUrls: ['./feed-six.component.css']
})
export class FeedSixComponent implements OnInit {

  feedIsEnabled:boolean = true;
  feed: Feed[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get<Feed[]>("http://localhost:8080/wt-feeds")
    .subscribe(feeds =>{
      this.feed = feeds;
    })
  }

  toggleFeed(){
    this.feedIsEnabled = !this.feedIsEnabled;
  }

}
