import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  errorMessage: string;
  success=false;
  arr=[]
  constructor( public fb:  FormBuilder) { }

  ngOnInit() {
      this.createForm()
  };

  //Create Form 
  createForm(){
    this.myForm = this.fb.group({
      firstname: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      lastname:['',[Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      email: ['',[Validators.required, Validators.email]],
      phone:['',[Validators.required,Validators.minLength(7),Validators.maxLength(16), Validators.pattern(/^[0-9]+(\.?[0-9]+)?$/)]],
      dob:['',[Validators.required, ]],
      message:['',[Validators.required, Validators.minLength(10),Validators.maxLength(200)]],
  })
}




  onSubmit() {
    this.submitted = true;
    console.log(this.myForm.value)
    // stop here if form is invalid
    
    
    if (this.myForm.invalid || this.myForm.dirty) {
      console.log(this.myForm)
      this.errorMessage='Please fill all input.'
      this.success=false;
      return
        }
    else{
      console.warn('success')
      this.success=true;
      this.arr.push(this.myForm.value)
        }
  }
 
}

