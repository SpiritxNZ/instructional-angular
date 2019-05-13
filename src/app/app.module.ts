import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule  } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DataDisplayComponent } from './data-display/data-display.component';
import { NavbarComponent} from './navbar/navbar.component';
import {AppRouting} from './app-routing.module';
import { DataDisplayCardComponent } from './data-display-card/data-display-card.component'
import { CommentsFormComponent } from './Comments-Form/Comments-Form.component';
import {DisplayDetailsComponent} from './display-details/display-details.component';
import {RepoService} from './services/repo.service';
import { ShowCommentsComponent } from './show-comments/show-comments.component';
import { GetCommentsJsonComponent } from './get-comments-json/get-comments-json.component';


@NgModule({
   declarations: [
      AppComponent,
      ContactUsComponent,
      DataDisplayComponent,
      NavbarComponent,
      DataDisplayCardComponent,
      CommentsFormComponent,
      DisplayDetailsComponent,
      ShowCommentsComponent,
      GetCommentsJsonComponent,
    
   ],
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      AppRouting,
      HttpClientModule
   ],
   providers: [RepoService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }