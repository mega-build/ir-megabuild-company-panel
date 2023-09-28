import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractReviewService } from 'src/services/contractReview/contract-review.service';

@Component(
	{
		selector: 'review-contract-review',
		templateUrl: './review-contract-review.component.html',
		styleUrls: ['./review-contract-review.component.css']
	}
)

export class ReviewContractReviewComponent implements OnInit
	{

		isLoading:boolean = false;
		contractReviewId!: string ;
		contractReview!: any;


		constructor
		(
			private route: ActivatedRoute,
			private router: Router,
			private contractReviewService: ContractReviewService,
			private errorHelper: ErrorHelper
		){}

		ngOnInit
		(): void 
			{
				this.route.params.subscribe(params => 
					{
						this.contractReviewId = params['contractReviewId'];
						if
						(
							this.contractReviewId
						)
							{
								this.getContractReviewId();
							}
						else
							{
								alert("آدرس نا مشخص")
							}
						
					}
				);
				
			}

		async getContractReviewId
		(): Promise<void>
			{

				try
					{

						this.isLoading = true;

						const data = await this.contractReviewService
							.get(
								this.contractReviewId
							)

						console.log(data.contractReview);
						this.contractReview = data.contractReview;
							
						this.isLoading = false;
					}
				catch
				(
					error:any
				)
					{
						this.isLoading = false;
						this.errorHelper.showErrorAsAlert(error);
					}
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

						this.navigateToContractReviewList();
					}
				catch
				(
					error:any
				)
					{
						this.isLoading = false;
						this.errorHelper.showErrorAsAlert(error);
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
						this.navigateToContractReviewList();
					}
				catch
				(
					error:any
				)
					{
						this.isLoading = false;
						this.errorHelper.showErrorAsAlert(error);
					}
			}

		navigateToContractReviewList
		():void
			{
				this.router.navigate(
					['contractReviewManagement','list','pending']
				);
			}
		
	}

