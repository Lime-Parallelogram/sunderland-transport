import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketListComponent } from "./ticket-list/ticket-list.component";
import { HeaderComponent } from "./header/header.component";
import { DestinationPickerComponent } from './destination-picker/destination-picker.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DestinationPickerComponent, TicketListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sunderland-transport';
}
