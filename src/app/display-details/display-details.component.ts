import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  private Comments
  errorMessage: string
  routeId:number
  private sub: any

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute) { }
    
  ngOnInit() {
    console.log(this.route)
    this.route.params.subscribe(params => {//get route params 
      console.log(params)
      this.routeId = +params['id']; // (+) converts string 'id' to a number; assign route params value to local to get data
      this.apiProcess(this.routeId)// pass required id to get data
     
   })
  }

  // get data for the required id from api, subscribe to observable data get from data source, response if get data, error message if no data
  apiProcess(dataId){
    this.callApi(dataId).subscribe(
      (res) => (console.log(res), this.Comments=res),
      (err) =>(console.log(err), this.errorMessage="SomeThing is wrong")
    )
  }

  //send http request to get data from data source, return observable data
  callApi(id){
    return this.http.get('https://jsonplaceholder.typicode.com/comments/'+ id)
  }
}
