import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-review-detail',
		templateUrl: './contract-review-detail.component.html',
		styleUrls: ['./contract-review-detail.component.css']
	}
)

export class ContractReviewDetailComponent
	{
		@Input() contractReview: any={};
	}
