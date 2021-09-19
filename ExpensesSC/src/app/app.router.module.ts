import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// components
import {EntriesComponent} from './entries/entries.component';


// route
const routes:Routes = [
    {path:'', component:EntriesComponent},
    {path:"entries", component:EntriesComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRouterModule{}