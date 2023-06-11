import { Component, OnInit } from '@angular/core';
import { NumberGeneratorService } from 'src/app/service/number-generator.service';

@Component({
  selector: 'app-uk-model',
  templateUrl: './uk-model.component.html',
  styleUrls: ['./uk-model.component.scss']
})
export class UkModelComponent implements OnInit {

  numSets: Array<Set<number>> = new Array();

  constructor(private numberGeneratorService: NumberGeneratorService) {

  }

  ngOnInit(): void {
    for(let i = 0; i<9;i++) {
      let min = i * 10 + 1;
      let max = i * 10 + 10;
      this.numSets.push(this.numberGeneratorService.generateRandomNumbers(10, min, max));
    }

  }
}
