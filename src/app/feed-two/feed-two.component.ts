import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/feed.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-feed-two',
  templateUrl: './feed-two.component.html',
  styleUrls: ['./feed-two.component.css']
})
export class FeedTwoComponent implements OnInit {

  feed: Feed[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get<Feed[]>("http://localhost:8080/eonline-feeds")
    .subscribe(feeds =>{
      this.feed = feeds;
    })
  }

}
