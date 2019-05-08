import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  private Comments
  errorMessage: string
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.callApi().subscribe(
      (res) => (console.log(res), this.Comments=res),
      (err) =>(console.log(err), this.errorMessage="SomeThing is wrong")
    )
  }
  

  callApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }
}
