import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberGeneratorService {
  constructor() {}

  public generateRandomNumbers(amount: number, minNumber: number, maxNumber: number): Set<number> {
    let numSet = new Set<number>();
    let sampleSpace = maxNumber - minNumber + 1;
    if (amount > sampleSpace) {
      console.error("Amount of numbers (%d) cannot be greater than the sample space (%d)! ", amount, sampleSpace);
      return numSet;
    }
    while (numSet.size < amount) {
      let num = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
      numSet.add(num);
    }
    return numSet;
  }
}
