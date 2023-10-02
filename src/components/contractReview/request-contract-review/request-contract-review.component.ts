import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractHelper } from 'src/helper/contractHelper';
import { ErrorHelper } from 'src/helper/errorHelper';
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
		contract!: any;
		//selectedUserList!: any[];
		selectedUserCompanyAccessList!:any[];
		contractReviewList!: any[];


		constructor
		(
			private route: ActivatedRoute,
			private router: Router,
			private contractService: ContractService,
			private contractReviewService: ContractReviewService,
			public contractHelper: ContractHelper,
			private errorHelper:ErrorHelper
		){}

		ngOnInit
		(): void 
			{
				this.route.params.subscribe(params => 
					{
						let contractIdParameter = params['contractId'];
						if
						(
							contractIdParameter
						)
							{
								this.contractId = contractIdParameter; 
								this.getContract();
								this.getAllContractReviewByContract(this.contractId);
							}
						else
							{
								alert("محتوای درخواستی نامعتبر است.");
								this.nvaigate_requestedContractList();
							}
						
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
						this.errorHelper.showErrorAsAlert(error);
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
						this.errorHelper.showErrorAsAlert(error);
					}
				
			}

		// selectedUserChanged
		// (
		// 	selectedUserList:any[]
		// ):void
		// 	{
		// 		console.log(selectedUserList);
		// 		this.selectedUserList = selectedUserList;
		// 	}

		selectedUserCompanyAccessChanged
		(
			selectedUserCompanyAccessList:any[]
		):void
			{
				console.log(selectedUserCompanyAccessList);
				this.selectedUserCompanyAccessList = selectedUserCompanyAccessList;
			}

		requestReview
		():void
			{
				try
					{

						this.isLoading = true;

						this.selectedUserCompanyAccessList.forEach(
							async (
								userCompanyAccess:any
							)=>
								{
									const data = await this.contractReviewService
										.add(
											this.contract._id,
											userCompanyAccess._id
										)

									console.log(data);

								}
						);

						this.isLoading = false;
						this.nvaigate_requestedContractList();
					}
				catch
				(
					error: any
				)
					{
						this.isLoading = false;
						this.errorHelper.showErrorAsAlert(error);
					}

				
			}

		removeContractReview
		(
			contractReview:any
		):void
			{
				
			}

		nvaigate_requestedContractList
		():void
			{
				this.router.navigate(
					['/','contractManagement','list','requested']
				);
			}
	}
