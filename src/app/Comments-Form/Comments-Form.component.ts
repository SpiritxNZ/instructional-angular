import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-Comments-Form',
  templateUrl: './Comments-Form.component.html',
  styleUrls: ['./Comments-Form.component.css']
})
export class CommentsFormComponent implements OnInit {
  myForm:FormGroup
  submitted=false
  success=false
  errorMessage:string
  constructor(public fb:FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.myForm = this.fb.group({
      title:['',[Validators.required, Validators.minLength(2)]],
      comments:['',[Validators.required,Validators.minLength(10), Validators.maxLength(200)]]
    })
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.myForm.value)
    // stop here if form is invalid
    
    
    if (this.myForm.invalid ) {
      console.log(this.myForm)
      this.errorMessage='Please fill all input.'
      this.success=false; 
      return
        }
    else{
      console.warn('success')
      this.success=true;
   
        }
  }
}
