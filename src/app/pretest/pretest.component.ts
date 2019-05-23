import { Component } from '@angular/core';

@Component({
  selector: 'app-pretest',
  templateUrl: './pretest.component.html',
  styleUrls: ['./pretest.component.css']
})
export class PretestComponent {

  constructor() { }

  answer1: any;
  answer2: any;

  result: any;

  value1: string = "All";
  value2: string = "NodeJS";

  submit(pretest) {

    let total = 0;
    if (this.answer1 == this.value1) {
      total = total + 2;
    }
    if (this.answer2 == this.value2) {
      total = total + 2;
    }
    this.result = total;
  }
}
