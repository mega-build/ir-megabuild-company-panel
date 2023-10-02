import { Component, Input } from '@angular/core';

@Component(
	{
		selector: 'contract-review-icon',
		templateUrl: './contract-review-icon.component.html',
		styleUrls: ['./contract-review-icon.component.css']
	}
)

export class ContractReviewIconComponent
	{
		@Input() contractReview: any={};

		getStatusClass
		():string
			{
				if
				(
					!this.contractReview.isReviewed
				)
					{
						return "cri_pending";
					}
				else if
				(
					this.contractReview.isReviewed &&
					this.contractReview.isApproved
				)
					{
						return "cri_approved";
					}
				else if
				(
					this.contractReview.isReviewed &&
					this.contractReview.isRejected
				)
					{
						return "cri_rejected";
					}
				else 
					{
						return "cri_unknown";
					}
			}

		getStatusTitle
		():string
			{
				if
				(
					this.contractReview &&
					this.contractReview.userCompanyAccess &&
					this.contractReview.userCompanyAccess.user &&
					this.contractReview.userCompanyAccess.user.firstname &&
					this.contractReview.userCompanyAccess.user.lastname
				)
					{
						const userTitle = '';//`${this.contractReview.userCompanyAccess.user.firstname} ${this.contractReview.userCompanyAccess.user.lastname}`
						if
						(
							!this.contractReview.isReviewed
						)
							{
								//return `در انتظار بررسی توسط ${userTitle}`;
								return `در انتظار بررسی`;
							}
						else if
						(
							this.contractReview.isReviewed &&
							this.contractReview.isApproved
						)
							{
								//return ` تایید شده توسط ${userTitle}`;
								return `تایید شده`;
							}
						else if
						(
							this.contractReview.isReviewed &&
							this.contractReview.isRejected
						)
							{
								//return `رد شده توسط ${userTitle}`;
								return `رد شده`;
							}
						else 
							{
								//return `نامشخص توسط${userTitle}`;
								return `نامشخص`;
							}
					}
				else
					{
						return 'عدم انطباق اطلاعات'
					}
				
			}

	}
