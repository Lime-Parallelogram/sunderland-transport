import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-output-page',
  imports: [],
  templateUrl: './output-page.component.html',
  styleUrl: './output-page.component.scss'
})
export class OutputPageComponent {

  constructor(private router: Router) {}

  nextPage() {
    this.router.navigate(['/page3']);
  }
}
