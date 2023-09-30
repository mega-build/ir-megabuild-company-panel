import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
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

		contractId!: string;
		contract!: any;
		isLoading: boolean = false;

		constructor
		(
			private route: ActivatedRoute,
			private router: Router,
			private contractService : ContractService,
			private errorHelper: ErrorHelper
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
								let contractIdParameter = params['contractId'];
								if
								(
									contractIdParameter
								)
									{
										this.contractId = contractIdParameter;
										this.getContract();
									}
								else
									{
										alert("آدرس اشتباه");
										this.nvaigate_darftedContractList();
									}
								
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
						this.errorHelper.showErrorAsAlert(error);
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
					
						this.nvaigate_darftedContractList();
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

		nvaigate_darftedContractList
		():void
			{
				const navigtaionParamterList = ['/','contractManagement','list','draft'];
				this.router.navigate(navigtaionParamterList);
			}
	}
