import { Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import { DestinationPickerComponent } from './destination-picker/destination-picker.component';
import { OutputPageComponent } from './output-page/output-page.component';
import { TicketListComponent } from "./ticket-list/ticket-list.component";



export const routes: Routes = [
    {path: '', component: DestinationPickerComponent},
    {path: 'page2', component: OutputPageComponent},
    {path: 'page3', component: TicketListComponent},
];
