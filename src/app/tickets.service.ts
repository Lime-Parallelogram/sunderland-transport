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

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  constructor() { }

  inputValues: InputItem[] | undefined;

  setInput(inputs: InputItem[]) {
    this.inputValues = inputs;
  }

  getOutput(): ServiceOutput | undefined {
    return
  }
}
