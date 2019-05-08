import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { NavbarComponent} from './navbar/navbar.component';



@NgModule({
   declarations: [
      AppComponent,     
      ContactUsComponent,
      DataDisplayComponent,
     
      NavbarComponent,
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
