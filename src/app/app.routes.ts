import { Routes } from '@angular/router';

import { TeamDetailsComponent } from './team-details/team-details.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

export const routes: Routes = [{
    path:'',component:LoginpageComponent
},
{
    path:'TeamDetails',component:TeamDetailsComponent
}];
