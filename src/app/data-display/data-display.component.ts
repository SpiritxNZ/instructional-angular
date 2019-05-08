import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css']
})
export class DataDisplayComponent implements OnInit {
 userList :any
 errorMessage:string
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.callApi().subscribe(
      (res)=>{console.log(res), this.userList = res},
      (err)=>{console.warn(err), this.errorMessage="wrong"}
    )
  }

  callApi(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
 
    
  


  
}
