import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ErrorHelper } from 'src/helper/errorHelper';
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

		contractCustomerList!: any[];

		isLoading:boolean = false;

		selectedCustomer:any = {};

		constructor
		(
			private route: ActivatedRoute,
			private contractCustomerService: ContractCustomerService,
			private errorHelper:ErrorHelper
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
						this.contractCustomerList = data.contractCustomerList;

						this.isLoading = false;
					}
				catch
				(
					error: any
				)
					{
						this.isLoading = false;
						this.errorHelper.showErrorAsAlert(error);
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
						this.errorHelper.showErrorAsAlert(error);
					}

			}

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
								let contractIdParameter:string = params['contractId']; 

								if
								(
									contractIdParameter
								)
									{
										this.contractId = contractIdParameter;
										this.getAllContractCustomerList();

									}
								else
									{
										alert("آدرس اشتباه است");
										//navigatte to home
									}
							}
						);
					}
				
				
			}

		selectCustomer
		(
			customer:any
		):void
			{
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
						this.errorHelper.showErrorAsAlert(error);
					}
			}
	}