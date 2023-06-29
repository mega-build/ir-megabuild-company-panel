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

		getStatusValue
		():string
			{
				if
				(
					this.contractReview.isReviewed == true &&
					this.contractReview.isApproved == true &&
					this.contractReview.isRejected == false 
				)
					{
						return "تایید شده"
					}
				else if
				(
					this.contractReview.isReviewed == true &&
					this.contractReview.isApproved == false &&
					this.contractReview.isRejected ==  true
				)
					{
						return "رد شده"
					}
				else if
				(
					!this.contractReview.isReviewed
				)
					{
						return "در انتظار بررسی"
					}
				else
					{
						return "نامشخص"
					}
				
			}
	}
