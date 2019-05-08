import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent} from './contact-us/contact-us.component';
import {DataDisplayComponent} from './data-display/data-display.component';
import {DataDisplayCardComponent}  from './data-display-card/data-display-card.component';
import{CommentsFormComponent} from './Comments-Form/Comments-Form.component';
const routes: Routes = [
   
    { path: 'contact-us', component: ContactUsComponent },

    { path: 'data-display',  component: DataDisplayComponent },
    { path: 'data-display-card', component:DataDisplayCardComponent},
    { path: 'comments-form', component:CommentsFormComponent}
];
export const AppRouting = RouterModule.forRoot(routes);