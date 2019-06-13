import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private updatePossible:boolean = false;
  private showSpinner:boolean = false;
  private alertMessage:string = "Update Not Possible. Wait few more minutes"

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.updatePossible);
  }

  updateCheck(){
    this.http
    .get<boolean>("http://localhost:8080/update-feeds")
    .subscribe(result =>{
      console.log(result);
      if(result){
        this.updateFeeds();
        this.updatePossible=false;
        this.showSpinner=true;
      }else{
        this.updatePossible = true;
        this.showSpinner=false;
      }
    })
  };

  updateFeeds(){
    this.http.get("http://localhost/FeedCrawler-Server/");
    setTimeout(() =>{
       this.showSpinner=false;
    },20000);
  }

}
