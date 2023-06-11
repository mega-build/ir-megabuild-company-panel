import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractPaymentService } from 'src/services/contractPayment/contract-payment.service';

@Component(
	{
		selector: 'app-contract-payment-list',
		templateUrl: './contract-payment-list.component.html',
		styleUrls: ['./contract-payment-list.component.css']
	}
)

export class ContractPaymentListComponent implements OnInit
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
	
	getAllContractPaymentList
	(): void
		{
			this.isLoading = true;
			this.contractPaymentService
				.getAllByContract(
					this.contractId
				)
				.subscribe(
					(data: any) => 
						{
							console.log(data.contractPaymentList);
							this.contractPaymentList = data.contractPaymentList;
							this.isLoading = false;
						}
				)
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