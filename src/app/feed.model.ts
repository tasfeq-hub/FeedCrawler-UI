export class Feed{

    public id:number;
    public title:string;
    public link:string;
    public published_at:string;
    public created_at:any;
    public feed_provider:string;

    constructor(id:number, title:string, link:string, published_at:string, created_at:any, feed_provider:string){
        this.id=id;
        this.title=title;
        this.link=link;
        this.published_at=published_at;
        this.created_at=created_at;
        this.feed_provider=feed_provider;
    }

}