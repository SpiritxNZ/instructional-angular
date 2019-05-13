import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class JsonService {
  private url="./assets/data/comments.json"
  constructor(private http: HttpClient) { }

  getComments(){
    return this.http.get(this.url)
  }

  postCommetns(Comment){
    return this.http.post(this.url, Comment)
  }
}
