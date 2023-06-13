import { Component, OnInit } from '@angular/core';
import { ContractReviewService } from 'src/services/contractReview/contract-review.service';

@Component(
	{
		selector: 'contract-review-panel',
		templateUrl: './contract-review-panel.component.html',
		styleUrls: ['./contract-review-panel.component.css']
	}
)

export class ContractReviewPanelComponent implements OnInit
	{
		contractReviewList: any[]=[];

		
		constructor
			(
				private contractReviewService: ContractReviewService
			)
				{}
			
		ngOnInit
		(): void 
			{
				this.getAll();
			}

		getAll
			(): void
				{
					this.contractReviewService
						.getAll()
						.subscribe(
							(data: any) => 
								{
									console.log(data.contractReviewList);
									this.contractReviewList = data.contractReviewList;
								}
						)
				}

	}
