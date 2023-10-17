import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractService } from 'src/services/contract/contract.service';

@Component(
	{
		selector: 'contract-payable-price-detail',
		templateUrl: './contract-payable-price-detail.component.html',
		styleUrls: ['./contract-payable-price-detail.component.css']
	}
)

export class ContractPayablePriceDetailComponent
	{

		@Input() contract!:any;
		@Output() onContractPayablePriceRemoved = new EventEmitter<any>();

		isLoading:boolean = false;

		constructor
		(
			private contractService: ContractService,
			private errorHelper: ErrorHelper
		){}

		async removeContractPayablePrice
		():Promise<void>
			{
				try
					{
						this.isLoading = true;
						const data = await this.contractService
							.removePayablePrice(
								this.contract._id
							);
						this.isLoading = false;

						this.onContractPayablePriceRemoved.emit();
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
