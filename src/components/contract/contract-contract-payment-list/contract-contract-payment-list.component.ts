import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractPaymentByContractPanelComponent } from 'src/components/contract-payment/contract-payment-by-contract-panel/contract-payment-by-contract-panel.component';

@Component(
	{
		selector: 'contract-contract-payment-list',
		templateUrl: './contract-contract-payment-list.component.html',
		styleUrls: ['./contract-contract-payment-list.component.css']
	}
)

export class ContractContractPaymentListComponent implements OnInit
	{

		@Input() contractId: string = "";

		contractPaymentList: any[]=[]
		isLoading:boolean = false;

		@ViewChild(ContractPaymentByContractPanelComponent)
		private contractPaymentByContractPanel!: ContractPaymentByContractPanelComponent;

		constructor
		(
			private route: ActivatedRoute
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
								this.contractId = params['contractId']; 
								//this.getAllContractPaymentList();
							}
						);
					}
			}

		newContractPaymentAdded
		(
			contractPayment:any
		):void
			{
				this.contractPaymentByContractPanel.getAllContractPaymentList();
			}

	}
