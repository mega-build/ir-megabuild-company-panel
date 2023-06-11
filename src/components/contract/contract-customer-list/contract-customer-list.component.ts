import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContractCustomerService } from 'src/services/contractCustomer/contract-customer.service';

@Component(
	{
		selector: 'app-contract-customer-list',
		templateUrl: './contract-customer-list.component.html',
		styleUrls: ['./contract-customer-list.component.css']
	}
)

export class ContractCustomerListComponent implements OnInit
	{

		@Input() contractId: string = "";

		contractCustomerList: any[]=[]

		isLoading:boolean = false;

		selectedCustomer:any = {};

		constructor
			(
				private route: ActivatedRoute,
				private contractCustomerService: ContractCustomerService
			)
				{}
		
		getAllContractCustomerList
		(): void
			{
				this.isLoading = true;
				this.contractCustomerService
					.getAllByContract(
						this.contractId
					)
					.subscribe(
						(data: any) => 
							{
								console.log(data.contractCustomerList);
								this.contractCustomerList = data.contractCustomerList;
								this.isLoading = false;
							}
					)
			}

		addCustomer
		():void
			{
				this.isLoading = true;
				this.contractCustomerService
					.add(
						this.contractId,
						this.selectedCustomer._id
					)
					.subscribe(
						(data: any) => 
							{
								console.log(data.contractCustomerList);
								this.contractCustomerList = data.contractCustomerList;
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
								this.getAllContractCustomerList();
							}
						);
					}
				
				
			}

		selectCustomer
		(
			customer:any
		):void
			{
				console.log(customer);
				
				this.selectedCustomer = customer;
				this.addCustomer();
			}
	}
