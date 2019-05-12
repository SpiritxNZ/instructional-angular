import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RepoService {
  // Behaviour subject
  url:"src/assets/data/comments.json"
  public comments = new BehaviorSubject('No comments')
  newComments:Observable<any>
  
  constructor(private http:HttpClient) { }
  
  getComments(){
    return this.http.get(this.url)
  } 
  
  postComments(comments){
    return this.http.post(this.url, comments)
  }
}
