import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from 'src/services/contract/contract.service';
import { ContractReviewService } from 'src/services/contractReview/contract-review.service';

@Component(
	{
		selector: 'request-contract-review',
		templateUrl: './request-contract-review.component.html',
		styleUrls: ['./request-contract-review.component.css']
	}
)

export class RequestContractReviewComponent implements OnInit
	{

		isLoading:boolean = false;
		contractId:string = "";
		contract: any= {};
		selectedUserList: any[] = [];
		contractReviewList: any[]= [];


		constructor
			(
				private route: ActivatedRoute,
				private contractService: ContractService,
				private contractReviewService: ContractReviewService
			){}

		ngOnInit
		(): void 
			{
				this.route.params.subscribe(params => 
					{
						this.contractId = params['contractId']; 
						this.getContract();
						this.getAllContractReviewByContract(this.contractId);
					}
				);
				
			}

		async getAllContractReviewByContract
		(
			contractId: string
		):Promise<void>
			{
				try
					{
						this.isLoading = true;

						const data = await this.contractReviewService
							.getAllByContract(
								contractId
							);

						this.contractReviewList = data.contractReviewList;

						this.isLoading = false;
					}
				catch
				(
					error: any
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

		async getContract
		(): Promise<void>
			{

				try
					{
						this.isLoading = true;

						const data = await this.contractService
							.get(
								this.contractId
							);
						console.log(data.contract);
						this.contract = data.contract;

						this.isLoading = false;
					}
				catch
				(
					error: any
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

		selectedUserChanged
		(
			selectedUserList:any[]
		):void
			{
				console.log(selectedUserList);
				this.selectedUserList = selectedUserList;
			}

		requestReview
		():void
			{
				try
					{

						this.isLoading = true;

						this.selectedUserList.forEach(
							async (
								user:any
							)=>
								{
									const data = await this.contractReviewService
										.add(
											this.contract._id,
											user._id
										)

									console.log(data);

								}
						);

						this.isLoading = false;
					}
				catch
				(
					error: any
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
