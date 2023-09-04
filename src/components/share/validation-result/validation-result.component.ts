import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'validation-result',
  templateUrl: './validation-result.component.html',
  styleUrls: ['./validation-result.component.scss']
})
export class ValidationResultComponent implements OnInit {

  @Input() validationResult:any = {};
  
  constructor() { }

  ngOnInit(): void {
  }

}
