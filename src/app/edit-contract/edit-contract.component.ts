import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'edit-contract',
		templateUrl: './edit-contract.component.html',
		styleUrls: ['./edit-contract.component.css']
	}
)

export class EditContractComponent implements OnInit
	{

		isLoading:boolean = false;
		contractId!:string ;
		contract!: any;


		constructor
		(
			private route: ActivatedRoute,
			private contractService: ContractService,
			private errorHelper: ErrorHelper
		){}

		ngOnInit
		(): void 
			{
				this.route.params.subscribe(params => 
					{
						this.contractId = params['contractId']; 
						if
						(
							this.contractId
						)
							{
								this.getContract();
							}
						else
							{
								alert("آدرس اشتباه")
							}
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
						this.errorHelper.showErrorAsAlert(error);
					}
			}

	}
