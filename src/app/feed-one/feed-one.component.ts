import { Component, OnInit } from '@angular/core';
import { FeedOne } from 'src/app/feed-one/feedone.model';
import { FeedOneService } from './feedone.service';

@Component({
  selector: 'app-feed-one',
  templateUrl: './feed-one.component.html',
  styleUrls: ['./feed-one.component.css']
})
export class FeedOneComponent implements OnInit {

  feedOne: FeedOne[];
  /*
  feedOne: FeedOne[] = [
    new FeedOne("First title","this is the link","january 04", new Date(),"NZK"),
    new FeedOne("second title","this is the link","january 05", new Date(),"NZK"),
    new FeedOne("third title","this is the link","january 06", new Date(),"NZK"),
    new FeedOne("fourth title","this is the link","january 07", new Date(),"NZK")
  ];
  */
  
  constructor(private feedOneService : FeedOneService) { }

  ngOnInit() {
    this.feedOne = this.feedOneService.getFeedOne();
  }

}
