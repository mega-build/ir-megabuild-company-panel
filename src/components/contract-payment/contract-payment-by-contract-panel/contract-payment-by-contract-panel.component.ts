import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

@Component(
	{
		selector: 'contract-payment-by-contract-panel',
		templateUrl: './contract-payment-by-contract-panel.component.html',
		styleUrls: ['./contract-payment-by-contract-panel.component.css']
	}
)

export class ContractPaymentByContractPanelComponent implements OnInit
	{

		@Input() contractId: string = "";
		@Output() onPaymentListLengthChanged = new EventEmitter<number>();

		contractPaymentList: any[]=[]
		isLoading: boolean = false;

		constructor
		(
			private contractPaymentService: ContractPaymentService
		){}

		ngOnInit
		(): void
			{
				this.getAllContractPaymentList();
			}

		async getAllContractPaymentList
		(): Promise<void>
			{
				try
					{
						this.isLoading = true;
						const data = await this.contractPaymentService
							.getAllByContract(
								this.contractId
							)

						console.log(data.contractPaymentList);
						this.contractPaymentList = data.contractPaymentList;

						this.onPaymentListLengthChanged.emit(this.contractPaymentList.length);

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

		onItemRemoved():void
			{
				this.getAllContractPaymentList();
			}

	}
