import { FeedOne } from './feedone.model';

export class FeedOneService {

    private feedOne: FeedOne[] = [
        new FeedOne("First title","this is the link","january 04", new Date(),"NZK"),
        new FeedOne("second title","this is the link","january 05", new Date(),"NZK"),
        new FeedOne("third title","this is the link","january 06", new Date(),"NZK"),
        new FeedOne("fourth title","this is the link","january 07", new Date(),"NZK")
      ];
    
    
    getFeedOne(){
        return this.feedOne.slice();
    }
}