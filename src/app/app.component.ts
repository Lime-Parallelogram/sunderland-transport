import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { DestinationPickerComponent } from './destination-picker/destination-picker.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, DestinationPickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sunderland-transport';
}
