import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-data-display-card',
  templateUrl: './data-display-card.component.html',
  styleUrls: ['./data-display-card.component.css']
})
export class DataDisplayCardComponent implements OnInit {
  private Comments
  errorMessage:string
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.callApi().subscribe(
      (res) => (console.log(res), this.Comments=res),
      (err) =>(console.log(err), this.errorMessage="SomeThing is wrong")
    )
  }

  callApi(){
    return this.http.get("https://jsonplaceholder.typicode.com/comments")
  }
}
