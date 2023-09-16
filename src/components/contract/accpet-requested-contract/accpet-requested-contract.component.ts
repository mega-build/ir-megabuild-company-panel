import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'accpet-requested-contract',
		templateUrl: './accpet-requested-contract.component.html',
		styleUrls: ['./accpet-requested-contract.component.css']
	}
)

export class AccpetRequestedContractComponent implements OnInit
	{
		isLoading:boolean = false;
		contractId:string = "";
		contract: any= {};

		constructor
		(
			private route: ActivatedRoute,
			private router: Router,
			private contractService: ContractService
		){}

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

		async accpet
		():Promise<void>
			{
					

				try
					{
						this.isLoading = true;
						const data = await this.contractService
							.acceptRequestedContract(
								this.contractId
							);
						console.log(data.result);
						this.isLoading = false;

						// show message 
						
						this.router.navigate(
							['contractManagement','list','requested']
						);
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

			
		async reject
		():Promise<void>
			{
				try
					{
						this.isLoading = true;
						const data = await this.contractService
							.rejectRequestedContract(
								this.contractId
							);
						console.log(data.result);
						this.isLoading = false;

						// show message 

						this.router.navigate(
							['contractManagement','list','requested']
						);
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
