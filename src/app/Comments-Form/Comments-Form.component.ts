import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-Comments-Form',
  templateUrl: './Comments-Form.component.html',
  styleUrls: ['./Comments-Form.component.css']
})
export class CommentsFormComponent implements OnInit {
  myForm: FormGroup
  submitted = false
  success = false
  errorMessage: string
  
  successData: any
  url = "./assets/data/comments.json"
  constructor(public fb: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.createForm();

  }

  createForm() {
    this.myForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      comments: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.myForm.value)
    // stop here if form is invalid


    if (this.myForm.invalid ) {
      console.log(this.myForm)
      this.errorMessage = 'Please fill all input.'
      this.success = false;
      return
    }
    else {
      console.warn('success')
      this.success = true;
      this.pushData()
    }
  }


  pushData(){
    this.postdata(this.myForm).subscribe(
      (data) => {
      this.successData = data;
        console.log('success', data)
      },
      (err) => {
      this.errorMessage = err;
        console.log('fail', err)
      }
    )
  }

  postdata(myForm) {
    return this.http.post(this.url, myForm)


  }
}
