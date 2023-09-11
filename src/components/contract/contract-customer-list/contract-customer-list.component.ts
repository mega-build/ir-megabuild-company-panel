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
		){}
		
		async getAllContractCustomerList
		(): Promise<void>
			{
				try
					{
						this.isLoading = true;
						const data = await this.contractCustomerService
							.getAllByContract(
								this.contractId
							);
						console.log(data.contractCustomerList);
						this.contractCustomerList = data.contractCustomerList;
						this.isLoading = false;
					}
				catch
				(
					error: any
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

		async addCustomer
		():Promise<void>
			{

				try
					{
						this.isLoading = true;

						const data = await this.contractCustomerService
							.add(
								this.contractId,
								this.selectedCustomer._id
							);

						this.isLoading = false;
						
						await this.getAllContractCustomerList()
					}
				catch
				(
					error: any
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

		async removeContractCustomer
		(
			contractCustomer:any
		):Promise<void>
			{
				try
					{
						this.isLoading = true;

						const data = await this.contractCustomerService
							.remove(
								contractCustomer._id
							);

						this.isLoading = false;
						await this.getAllContractCustomerList()
					}
				catch
				(
					error: any
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
	}