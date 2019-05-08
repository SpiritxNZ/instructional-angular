import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  callApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
