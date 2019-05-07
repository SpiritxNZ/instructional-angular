import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
   declarations: [
      AppComponent,
     
      ContactUsComponent,
     
   ],
   imports: [
      BrowserModule,   
      FormsModule,
      ReactiveFormsModule,

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
