import { Component } from '@angular/core';
import { ErrorHelper } from 'src/helper/errorHelper';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

@Component(
	{
		selector: 'contract-payment-panel',
		templateUrl: './contract-payment-panel.component.html',
		styleUrls: ['./contract-payment-panel.component.css']
	}
)
export class ContractPaymentPanelComponent
	{
		contractPaymentList!: any[];
		isLoading: boolean = false;
		filterOptions!: any;
		
		constructor
		(
			private contractPaymentService: ContractPaymentService,
			private errorHelper:ErrorHelper
		){}

		setFilter
		(
			filterOptions:any
		):void
			{
				this.filterOptions = filterOptions;
				if
				(
					filterOptions.startDate &&
					filterOptions.endDate 
				)
					{
						console.log(filterOptions);
						this.getAllContractPaymentListFromDateToDate();
					}
				else
					{
						this.contractPaymentList = [];
					}
				
			}

		async getAllContractPaymentListFromDateToDate
			(): Promise<void>
				{

					try
						{
							this.isLoading = true;
							
							const data = await this.contractPaymentService
								.getAllFromDateToDate(
									this.filterOptions.startDate,
									this.filterOptions.endDate
								);
							this.contractPaymentList = data.contractPaymentList;
							
							this.isLoading = false;
						}
					catch
					(
						error:any
					)
						{
							this.isLoading = false;
							this.errorHelper.showErrorAsAlert(error);
						}

				}

	}
