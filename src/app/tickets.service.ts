import { HttpClient } from '@angular/common/http';
import { Injectable, input } from '@angular/core';

export interface InputItem {
  operator: string,
  startStop: string,
  endStop: string,
  age: number,
  travel_today: boolean
}

export interface TicketVariant {
  price: number,
  name: string,
  link: string,
  duration: string,
  day_equivalent: number
}

export interface ServiceOutput {
  single: {
    title: string,
    variants: TicketVariant[],
  }[]
}

export interface TicketListOffering {
  operator: string,
  ticket_offerings: TicketVariant[]
}

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor(private httpClient: HttpClient) {
  }

  inputValues: InputItem[] | undefined;
  public allTickets: any | undefined;

  setInput(inputs: InputItem[]) {
    this.inputValues = [
      {
        operator: "Go North East",
        startStop: "zone_central",
        endStop: "zone_central",
        age: 20,
        travel_today: false
      }
    ];

    this.httpClient.get<TicketListOffering[]>("/ticket_list.json").subscribe(response => {
      this.allTickets = response.map(offering => {
        return {
          title: offering.operator,
          variants: offering.ticket_offerings
        }
      });
    })
  }

  getOutput(): ServiceOutput {
    setTimeout(() => {
      console.log(<ServiceOutput>this.allTickets);
    }, 100)
    

    return {
      single: [
        {
          title: "Arriva Ticket",
          variants: [
            {
              price: 2.5,
              name: "Contactless Single",
              link: "",
              duration: "Single",
              day_equivalent: 0,
            },
            {
              price: 17.90,
              name: "Weekly FlexPass",
              link: "https://www.arrivabus.co.uk/buy-tickets/region/north-east/zone/ane074",
              duration: "Week",
              day_equivalent: 7
            }
          ]
        }
      ]
    }
  }
}
