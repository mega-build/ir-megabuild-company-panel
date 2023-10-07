import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractPaymentHelper } from 'src/helper/contractPayment/contractPaymentHelper';
import { ErrorHelper } from 'src/helper/errorHelper';
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

		@Input() contractId!: string;
		@Output() onPaymentListLengthChanged = new EventEmitter<number>();
		@Output() onPaymentTotalPriceChanged = new EventEmitter<number>();


		contractPaymentList!: any[];
		isLoading: boolean = false;

		constructor
		(
			private contractPaymentService: ContractPaymentService,
			private errorHelper:ErrorHelper,
			private contractPaymentHelper: ContractPaymentHelper
		){}

		ngOnInit
		(): void
			{
				this.getAllContractPaymentListByContract();
			}

		async getAllContractPaymentListByContract
		(): Promise<void>
			{
				try
					{
						this.isLoading = true;
						const data = await this.contractPaymentService
							.getAllByContract(
								this.contractId
							)

							console.log('asdfasd');
						this.contractPaymentList = data.contractPaymentList;

						const totalPaymentPrice:number = this.contractPaymentHelper.getTotalPaymentPriceFromList(this.contractPaymentList);

						this.onPaymentListLengthChanged.emit(this.contractPaymentList.length);
						this.onPaymentTotalPriceChanged.emit(totalPaymentPrice);

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

		onItemRemoved():void
			{
				this.getAllContractPaymentListByContract();
			}

	}
