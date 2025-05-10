import { Component } from '@angular/core';
import { ServiceOutput, TicketsService, TicketVariant } from '../tickets.service';

@Component({
  selector: 'app-ticket-list',
  imports: [],
  templateUrl: './ticket-list.component.html',
  styleUrl: './ticket-list.component.scss'
})
export class TicketListComponent {

  constructor (private ticketsService: TicketsService) {}

  ticketList: ServiceOutput | undefined;

  ngOnInit() {
    this.ticketList = this.ticketsService.getOutput();
  }

  /**
   * Calculate the number of single trips that would be required to make this journey worthwhile
   */
  calculateBreakEven(price: number, day_equivalent: number): number | undefined {
    // Find the cost / details about a single journey
    // NOTE: Assumes there is only a single ticket shown at the moment
    let singleJourney: TicketVariant | undefined = this.ticketList?.single[0].variants.find(value => value.day_equivalent == 0)

    if (!singleJourney) {
      return undefined
    }

    return Math.ceil(price / singleJourney.price)
  }
}
