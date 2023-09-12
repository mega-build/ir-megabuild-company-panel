import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'contract-preview',
		templateUrl: './contract-preview.component.html',
		styleUrls: ['./contract-preview.component.css']
	}
)

export class ContractPreviewComponent
	{

		contractId: string = "";
		contract: any;
		isLoading: boolean = false;

		constructor
		(
			private route: ActivatedRoute,
			private contractService : ContractService
		){}

		ngOnInit
		(): void
			{
				if
				(
					this.route.parent
				)
					{
						this.route.parent.params.subscribe(params => 
							{
								this.contractId = params['contractId']; 
								this.getContract();
							}
						);
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

		async requestConfirmation
		():Promise<void>
			{
				

				try
					{
						this.isLoading = true;
						const data = await this.contractService
							.requestContractConfirmation(
								this.contractId
							);
						console.log(data.result);
						this.isLoading = false;

						// show message and go to list
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
