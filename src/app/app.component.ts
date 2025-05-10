import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketListComponent } from "./ticket-list/ticket-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TicketListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sunderland-transport';
}
