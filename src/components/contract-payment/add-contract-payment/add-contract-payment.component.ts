import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component(
	{
		selector: 'add-contract-payment',
		templateUrl: './add-contract-payment.component.html',
		styleUrls: ['./add-contract-payment.component.css']
	}
)

export class AddContractPaymentComponent implements OnInit
	{

		contractId= "";

		selectedContractPaymentMethod:any = {};

		constructor
		(
			private route: ActivatedRoute,
			private router: Router
		){}

		ngOnInit
		(): void
			{
				console.log('asdfasd');
				
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

	
		setContractPaymentMethod
		(
			contractPaymentMethod:any
		):void
			{
				this.selectedContractPaymentMethod = contractPaymentMethod;
				console.log(this.selectedContractPaymentMethod);
				
			}

		save
		():void
			{}

		isChequePaymentMethod
		():boolean
			{
				if
				(
					this.selectedContractPaymentMethod &&
					this.selectedContractPaymentMethod.componentName == "CHEQUE"
				)
					{
						return true;
					}
				else
					{
						return false;
					}
			}

		isDepositPaymentMethod
		():boolean
			{
				if
				(
					this.selectedContractPaymentMethod &&
					this.selectedContractPaymentMethod.componentName == "DIPOSIT"
				)
					{
						return true;
					}
				else
					{
						return false;
					}
			}

		isDickerPaymentMethod
		():boolean
			{
				if
				(
					this.selectedContractPaymentMethod &&
					this.selectedContractPaymentMethod.componentName == "DICKER"
				)
					{
						return true;
					}
				else
					{
						return false;
					}
			}

		isDeedPaymentMethod
		():boolean
			{
				if
				(
					this.selectedContractPaymentMethod &&
					this.selectedContractPaymentMethod.componentName == "DEED"
				)
					{
						return true;
					}
				else
					{
						return false;
					}
			}

		itemAdded
		(
			addedContractPayment: any
		):void
			{
				this.router.navigate(
					["../list"],
					{
						relativeTo:this.route
					}
				)
			}

	}
