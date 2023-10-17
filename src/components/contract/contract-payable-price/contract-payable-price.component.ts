import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'contract-payable-price',
		templateUrl: './contract-payable-price.component.html',
		styleUrls: ['./contract-payable-price.component.css']
	}
)

export class ContractPayablePriceComponent implements OnInit
	{

		contractId!: string;
		contract!:any;

		isLoading:boolean = false;

		constructor
		(
			private route: ActivatedRoute,
			private contractService: ContractService,
			private errorHelper:ErrorHelper,
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
										alert("آدرس اشتباه است")
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
						const contract = data.contract;
						this.contract = contract;
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

		payablePriceChanged
		():void
			{
				this.getContract();
			}

	}
