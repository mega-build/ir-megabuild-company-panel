import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-review-list',
		templateUrl: './contract-review-list.component.html',
		styleUrls: ['./contract-review-list.component.css']
	}
)

export class ContractReviewListComponent
	{
		@Input() contractReviewList: any[]=[];
	}
