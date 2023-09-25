import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
		hasAnyPayment:boolean = false;

		constructor
		(
			private route: ActivatedRoute
		){}
		
		ngOnInit
		(): void
			{
				if
				(
					this.route.parent &&
					this.route.parent.parent
				)
					{
						this.route.parent.parent.params.subscribe(params => 
							{
								this.contractId = params['contractId']; 
							}
						);
					}
			}

		paymentListLengthChanged
		(
			paymentListLength:number
		):void
			{
				console.log(paymentListLength);

				if
				(
					paymentListLength == 0
				)
					{
						this.hasAnyPayment = false;
					}
				else
					{
						this.hasAnyPayment = true;
					}
				
				
			}

	}
