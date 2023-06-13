import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-review-list-item',
		templateUrl: './contract-review-list-item.component.html',
		styleUrls: ['./contract-review-list-item.component.css']
	}
)

export class ContractReviewListItemComponent
	{
		@Input() contractReview: any={};
	}
