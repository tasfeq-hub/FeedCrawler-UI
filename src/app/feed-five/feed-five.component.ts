import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/feed.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed-five',
  templateUrl: './feed-five.component.html',
  styleUrls: ['./feed-five.component.css']
})
export class FeedFiveComponent implements OnInit {

  feed: Feed[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get<Feed[]>("http://localhost:8080/feedforall-feeds")
    .subscribe(feeds =>{
      this.feed = feeds;
    })
  }

}
