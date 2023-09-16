import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContractCustomerService } from 'src/services/contractCustomer/contract-customer.service';

@Component(
	{
		selector: 'add-contract-customer',
		templateUrl: './add-contract-customer.component.html',
		styleUrls: ['./add-contract-customer.component.css']
	}
)

export class AddContractCustomerComponent
	{
		
		selectedCustomer:any = {};
		newNationalCode: string ="";
		contractId:string = "";
		isLoading: boolean = false;

		constructor
		(
			private router: Router,
			private route: ActivatedRoute,
			private contractCustomerService: ContractCustomerService
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

		async selectCustomer
		(
			customer:any
		):Promise<void>
			{
				console.log(customer);
				
				this.selectedCustomer = customer;

				await this.addCustomer();

				this.router.navigate(
					["../list"],
					{
						relativeTo:this.route
					}
				);
			}

		addNewCustomerWithNationalCode
		(
			nationalCode:string
		):void
			{
				this.newNationalCode = nationalCode;
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
