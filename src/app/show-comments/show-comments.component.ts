import { Component, OnInit } from '@angular/core';
import { RepoService } from '../services/repo.service';

@Component({
  selector: 'app-show-comments',
  templateUrl: './show-comments.component.html',
  styleUrls: ['./show-comments.component.css']
})
export class ShowCommentsComponent implements OnInit {
  comments:string
 
  constructor(private repo:RepoService) { }

  ngOnInit() {
    this.repo.comments.subscribe(
      (data)=> this.comments=data
    )
  }

}
