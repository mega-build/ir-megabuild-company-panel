import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ContractPaymentMethodService } from 'src/services/contractPaymentMethod/contract-payment-method.service';

@Component(
	{
		selector: 'select-contract-payment-method',
		templateUrl: './select-contract-payment-method.component.html',
		styleUrls: ['./select-contract-payment-method.component.css']
	}
)

export class SelectContractPaymentMethodComponent implements OnInit
	{
		@Output() setContractPaymentMethod = new EventEmitter<any>();

		contractPaymentMehodList: any[]=[]
		isLoading: boolean = false;
		
		constructor
		(
			private contractPaymentMethodService: ContractPaymentMethodService
		)
			{}

		ngOnInit(): void {
			this.getAllContractPaymentMethodList();
		}

		async getAllContractPaymentMethodList
		(): Promise<void>
			{
				try
					{
						this.isLoading = true;

						const data = await this.contractPaymentMethodService.getAll();

						console.log(data.contractPaymentMethodList);
						this.contractPaymentMehodList = data.contractPaymentMethodList;

						this.isLoading = false;
					}
				catch
				(
					error:any
				)
					{
						this.isLoading = false;
						alert(error.error);
					}
			
			}


		selectContractPaymentMehod
		(
			contractPaymentMehod:any
		):void
			{
				this.setContractPaymentMethod.emit(contractPaymentMehod);
			}
	}
