import { Component, OnInit } from '@angular/core';
import { FeedOne } from 'src/app/feed-one/feedone.model';
import { HttpClient } from '@angular/common/http';
 
@Component({
  selector: 'app-feed-one',
  templateUrl: './feed-one.component.html',
  styleUrls: ['./feed-one.component.css']
})
export class FeedOneComponent implements OnInit {

  feedOne: FeedOne[] = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
    .get<FeedOne[]>("http://localhost:8080/nyt-feeds")
    .subscribe(feeds =>{
      this.feedOne = feeds;
    })
  }

}
