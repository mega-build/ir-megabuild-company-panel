import { Component } from '@angular/core';
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
		contractPaymentList: any[]=[];
		isLoading: boolean = false;
		filterOptions!: any;
		
		constructor
		(
			private contractPaymentService: ContractPaymentService
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
							
							console.log(data.contractPaymentList);
							this.contractPaymentList = data.contractPaymentList;
							
							this.isLoading = false;
						}
					catch
					(
						error:any
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
