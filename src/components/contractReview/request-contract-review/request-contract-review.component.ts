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


	constructor
		(
			private route: ActivatedRoute,
			private contractService: ContractService,
			private contractReviewService: ContractReviewService
		)
			{}

	ngOnInit
	(): void 
		{
			this.route.params.subscribe(params => 
				{
					this.contractId = params['contractId']; 
					this.getContract();
				}
			);
			
		}

	getContract
	(): void
		{
			this.isLoading = true;
			this.contractService
				.get(
					this.contractId
				)
				.subscribe(
					(data: any) => 
						{
							console.log(data.contract);
							this.contract = data.contract;
							this.isLoading = false;
						}
				)
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
			console.log(this.selectedUserList);
			this.selectedUserList.forEach(
				(
					user:any
				)=>
					{
						this.contractReviewService
							.add(
								this.contract._id,
								user._id
							)
							.subscribe(
								(data: any) => 
									{
										console.log(data);
									}
							)

					}
			);
		}
}
