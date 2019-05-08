import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent} from './contact-us/contact-us.component';
import {DataDisplayComponent} from './data-display/data-display.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    {path:'', component: AppComponent,
    children:[
    { path: 'contact-us', component: ContactUsComponent },

    { path: 'data-display',  component: DataDisplayComponent },
    ]
    }
];