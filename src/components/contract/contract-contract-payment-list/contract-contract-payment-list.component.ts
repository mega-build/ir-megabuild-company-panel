import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

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

		constructor
			(
				private route: ActivatedRoute,
				private contractPaymentService: ContractPaymentService
			)
				{}
		
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
						this.isLoading = false;		

					}
				catch
				(
					error:any
				)
					{
						this.isLoading = false;		
						alert(error.error)	
					}
				
			}

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
								this.getAllContractPaymentList();
							}
						);
					}
				
				
			}

	}
