import { Component, OnInit } from '@angular/core';
import { JsonService } from '../services/json.service';

@Component({
  selector: 'app-get-comments-json',
  templateUrl: './get-comments-json.component.html',
  styleUrls: ['./get-comments-json.component.css']
})
export class GetCommentsJsonComponent implements OnInit {
  commentsList:any
  errorMessage:string
  constructor(private json:JsonService) { }

  ngOnInit() {
   
      this.json.getComments().subscribe(
        (comments) => { console.log(comments),this.commentsList=comments},
        (err) => {console.log(err), this.errorMessage="wrong"}
      )
    
  
  }

}
