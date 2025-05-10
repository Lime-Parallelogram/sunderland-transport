import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-destination-picker',
  imports: [HeaderComponent],
  templateUrl: './destination-picker.component.html',
  styleUrl: './destination-picker.component.scss'
})
export class DestinationPickerComponent {

  constructor(private router: Router) {}

  nextPage() {
    this.router.navigate(['/page2']);
  }

}
