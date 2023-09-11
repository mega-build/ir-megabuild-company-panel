import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractReviewService } from 'src/services/contractReview/contract-review.service';

@Component(
	{
		selector: 'app-review-contract-review',
		templateUrl: './review-contract-review.component.html',
		styleUrls: ['./review-contract-review.component.css']
	}
)

export class ReviewContractReviewComponent implements OnInit
	{

		isLoading:boolean = false;
		contractReviewId:string = "";
		contractReview: any= {};


		constructor
			(
				private route: ActivatedRoute,
				private contractReviewService: ContractReviewService
			)
				{}

		ngOnInit
		(): void 
			{
				this.route.params.subscribe(params => 
					{
						this.contractReviewId = params['contractReviewId']; 
						this.getContractReviewId();
					}
				);
				
			}

		getContractReviewId
		(): void
			{
				this.isLoading = true;
				this.contractReviewService
					.get(
						this.contractReviewId
					)
					.subscribe(
						(data: any) => 
							{
								console.log(data.contractReview);
								this.contractReview = data.contractReview;
								this.isLoading = false;
								
							}
					)
			}

		async approve
		():Promise<void>
			{
				try
					{

						this.isLoading = true;

						const data = await this.contractReviewService
						.setReviewResult(
							this.contractReviewId,
							true,
							false
						)

						console.log(data);
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
		async reject
		():Promise<void>
			{
				try
					{

						this.isLoading = true;

						const data = await this.contractReviewService
						.setReviewResult(
							this.contractReviewId,
							false,
							true
						)

						console.log(data);
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

