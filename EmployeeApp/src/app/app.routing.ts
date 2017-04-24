import { Routes, RouterModule } from '@angular/router';

//import { MediaItemFormComponent } from './media-item-form.component';
//import { MediaItemListComponent } from './media-item-list.component';
import{AppComponent} from 'app/app.component';
import {FormComponent} from'app/form/form.component';
import {RightComponent} from 'app/right/right.component';

const appRoutes: Routes = [
  {path: 'add', component: FormComponent },
  {path: 'employees', component: RightComponent },
  {path:'employee/:id', component: FormComponent },
  {path :'',pathMatch:'full',redirectTo:'all'}
];

export const Routing = RouterModule.forRoot(appRoutes);
