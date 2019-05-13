import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RepoService {
  // Behaviour subject
 
  public comments = new BehaviorSubject('No Comments')
  newComments=this.comments.asObservable()

  constructor(private http:HttpClient) { }
 

  
  postComments(newComments){
    return this.comments.next(newComments)
  }


}
