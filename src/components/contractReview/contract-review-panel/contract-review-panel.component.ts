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
		isLoading: boolean = false;

		
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

		async getAll
			(): Promise<void>
				{

					try
						{
							this.isLoading = true;
							
							const data = await this.contractReviewService.getAll()
							
							console.log(data.contractReviewList);
							this.contractReviewList = data.contractReviewList;
							
							this.isLoading = false;
						}
					catch
					(
						error:any
					)
						{
							this.isLoading = false;
							if
							(
								error.error &&
								error.error.message
							)
								{
									alert(error.error.message);
								}
							else
								{
									alert(error)
								}
						}

					
					
					
				}

	}
