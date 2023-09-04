import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'app-edit-contract',
		templateUrl: './edit-contract.component.html',
		styleUrls: ['./edit-contract.component.css']
	}
)

export class EditContractComponent implements OnInit
	{

		isLoading:boolean = false;
		contractId:string = "";
		contract: any= {};


		constructor
			(
				private route: ActivatedRoute,
				private contractService: ContractService
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
						alert(error.error);
					}
			}

	}
