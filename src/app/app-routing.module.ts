import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent} from './contact-us/contact-us.component';
import {DataDisplayComponent} from './data-display/data-display.component';
import {DataDisplayCardComponent}  from './data-display-card/data-display-card.component';
import{CommentsFormComponent} from './Comments-Form/Comments-Form.component';
import {DisplayDetailsComponent} from './display-details/display-details.component';
import { ShowCommentsComponent } from './show-comments/show-comments.component';
import { GetCommentsJsonComponent} from './get-comments-json/get-comments-json.component';
//set path for each page
const routes: Routes = [  
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'data-display',  component: DataDisplayComponent },
    { path:'data-display-card', component:DataDisplayCardComponent},
    { path:'data-display-card/:id', component: DisplayDetailsComponent},
    { path: 'comments-form', component:CommentsFormComponent},
    { path:'show-comments', component:ShowCommentsComponent},
    { path:'show-comments-json', component:GetCommentsJsonComponent}
];

//export path 
export const AppRouting = RouterModule.forRoot(routes);