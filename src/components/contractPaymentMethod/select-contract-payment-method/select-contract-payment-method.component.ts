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
		
		constructor
		(
			private contractPaymentMethodService: ContractPaymentMethodService
		)
			{}

		ngOnInit(): void {
			this.getAllContractPaymentMethodList();
		}

		getAllContractPaymentMethodList
		(): void
			{
				this.contractPaymentMethodService
					.getAll()
					.subscribe(
						(data: any) => 
							{
								console.log(data.contractPaymentMethodList);
								this.contractPaymentMehodList = data.contractPaymentMethodList;
								
							}
					)
			}


		selectContractPaymentMehod
		(
			contractPaymentMehod:any
		):void
			{
				this.setContractPaymentMethod.emit(contractPaymentMehod);
			}
	}
